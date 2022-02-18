
import { mount, render } from 'enzyme';
import { AppRouter } from './../../routers/AppRouter';
import { AuthContext } from './../../auth/authContext';
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import {auth} from './../../firebase'

describe('Testing on AppRouter', () => {
  
  test('This test must showing if the user is not authenticating', () => {
    
    const authReducer = {
      user: {
        logged: false
      }
    }
    
    const wapper = mount(
      <AuthContext.Provider value={authReducer} >
        <AppRouter />
      </AuthContext.Provider>
    );
    
    expect(wapper.find('h1').text().trim()).toBe('Iniciar sesión')
    expect(wapper).toMatchSnapshot()
  });
 
})