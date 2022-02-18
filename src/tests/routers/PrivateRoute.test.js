import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoute } from '../../routers/DashboardRoute';
import { PriveteRouter } from './../../routers/PriveteRouter';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Saliendo...</span>
}))

describe('Testing on <PrivateRouter />', () => {
  
  Storage.prototype.setItem = jest.fn();
  
  test('This test should show corretly the private comoponet if user is authentucated', () => {

    const fakeAuth = {
      currentUser: true,
    };

    const wapper = mount(
      <AuthContext.Provider value={fakeAuth}>
        <MemoryRouter initalEntries={['/']}>
          <PriveteRouter>
            <h1>Componente Privado</h1>
          </PriveteRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect(wapper.text().trim()).toBe('Componente Privado')
  });


  test('This test should show the component <DashboardRoute /> without any hero', () => {
    
    const textInfo = 'No hay superheroes en la lista de favoritos...';

    const contextValue = {
      currentUser: true,
      user: {
        name: 'Leandro'
      },
      hero: []
    };

    const wapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initalEntries={['/']}>
          <PriveteRouter>
            <DashboardRoute />
          </PriveteRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('p').text().trim()).toBe(textInfo);
    expect(contextValue.hero.length).toBeLessThan(1);
  });


  test('This test should show the component <DashboardRoute /> with at least one hero', () => {
    
    const contextValue = {
      currentUser: true,
      user: {
        name: 'Leandro'
      },
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
    };

    const wapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <PriveteRouter>
            <DashboardRoute />
          </PriveteRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h5').text().trim()).toBe('Batman');
    expect(contextValue.hero.length).toBeGreaterThanOrEqual(1);
  });

  test('This test should not show the private component if the user is not authenticated', () => {

    const contextValue = {
      currentUser: false,
    };

    const wapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <PriveteRouter>
            <h1>Componente Privado</h1>
          </PriveteRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper.text().trim()).toBe('Saliendo...');
  });
});