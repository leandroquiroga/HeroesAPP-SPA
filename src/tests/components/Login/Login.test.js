
import { mount} from 'enzyme';
import { LoginScreen } from './../../../components/Login/LoginScreen';
import { AuthContext } from './../../../auth/authContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RegisterScreen } from './../../../components/Register/RegisterScreen';
import { act } from '@testing-library/react';
import * as React from 'react';

// const loginUser = jest.fn();

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Testing the component <LoginScreen/>', () => {

  const contextValue = {
    dispatch: jest.fn(),
    login: jest.fn(),
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
    user: {
      email: 'leandro@correo.com',
      password: '123456'
    }
  };



  const wapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test('This test must showing correctly', () => {
    

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h1').text().trim()).toBe('Iniciar sesión');
    expect(wapper.find('#emailUser').exists()).toBeTruthy();
    expect(wapper.find('#passUser').exists()).toBeTruthy();

  });

  test('This test must navigate to the <Register /> component by clicking', () => {
    
    expect(wapper.find('a').exists()).toBe(true)

    wapper.find('a').prop('onClick')({
      defaultPrevented: () => { }
    });
    
    const pageRegister = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/register']}>
          <Routes>
            <Route path='/register' element={<RegisterScreen />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect(pageRegister).toMatchSnapshot();
    expect(pageRegister.find('h1').text().trim()).toBe('Registrate')
  });

  test('This test should check if the inputs are not empty', () => {
    const { user } = contextValue;

    wapper.find('#emailUser').simulate('change', {
      target: {
        name: 'email',
        value: user.email
      }
    });
    
    wapper.find('#passUser').simulate('change', {
      target: {
        name: 'password',
        value: user.password
      }
    });
    act(() => { 
      wapper.find('form').prop('onSubmit')({
        preventDefault: () => { }
      });
    })
    

    expect(wapper.find('#emailUser').prop('value')).toBe(user.email)
    expect(wapper.find('#passUser').prop('value')).toBe(user.password);
    
  });

})