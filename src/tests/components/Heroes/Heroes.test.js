
import { Heroes } from './../../../components/Heores/Heroes';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('Testing on <Heroes />', () => {
  const heroReducer = {
    dispatchHero: jest.fn(),
    hero: [
      {
        'id': 'dc-batman',
        'superhero': 'Batman',
        'publisher': 'DC Comics',
        'alter_ego': 'Bruce Wayne',
        'first_appearance': 'Detective Comics #27',
        'characters': 'Bruce Wayne'
      },
    ],
  }
  test('This test must should display the component corretcly', () => {

    const wapper = mount(
      <AuthContext.Provider value={heroReducer}>

        <MemoryRouter initialEntries={['/hero/dc-batman']}>
          <Routes>
            <Route path='/hero/:heroID' element={<Heroes />} />
            <Route path='/' element={<h1>No hay heroes</h1>} />
          </Routes>
        </MemoryRouter>
      
      </AuthContext.Provider>
    );
    
    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h3').text().trim()).toBe('Batman')
  });

  test('This test should display an message "No hay heroes" if not exist an hero', () => {
    
    const wapper = mount(
      <AuthContext.Provider value={heroReducer}>

        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/hero' element={<Heroes />} />
            <Route path='/' element={<h1>No hay heroes</h1>} />
          </Routes>
        </MemoryRouter>
      
      </AuthContext.Provider>
    );

    expect(wapper.find('h1').text().trim()).toBe('No hay heroes');
  });

  test('This test should return to the previos screen', () => {
    const wapper = mount(
      <AuthContext.Provider value={heroReducer}>

        <MemoryRouter initialEntries={['/hero/dc-batman']}>
          <Routes>
            <Route path='/hero/:heroID' element={<Heroes />} />
          </Routes>
        </MemoryRouter>
      
      </AuthContext.Provider>
    );

    wapper.find('button').at(0).prop('onClick')();

    expect(mockNavigate).toHaveBeenCalledWith(-1);

  })
})