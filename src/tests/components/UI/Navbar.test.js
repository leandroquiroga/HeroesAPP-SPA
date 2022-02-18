
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { NavbarScreen } from '../../../components/UI/Navbar';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () =>  mockNavigate,
}));

describe('Testing on component <Navbar />', () => {

  const contexValue = {
    dispatch: jest.fn(),
    user: {
      name: 'Leandro',
      logged: true,
    },

  };
    
  const wapper = mount(
    <AuthContext.Provider value={contexValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<NavbarScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

    
    
  test('This test must showing corretly', () => {
    const { user } = contexValue;
    const logoPath = '/assets/svg/avatar.svg';

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('.nav-item.nav-link.text-white.text-center').text().trim()).toBe(`Hola, ${user.name} 👋`);
    expect(wapper.find('.navbar-icon').prop('src')).toBe(logoPath);
  });
});