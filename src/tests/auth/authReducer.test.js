import { authReducer } from './../../auth/authReducer';
import { types } from '../../types/type';


describe('Test on authReducer', () => {
  
  test('This test must return the state by defect', () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test('This test must authenticate a user and greet with username', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Leandro'
      }
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      name: 'Leandro'
    });
  });

  test('This test must make the logout of the user', () => {
    
    const action = {
      type: types.logout,
    };
    
    const state = authReducer({ logged: true, name: 'Leandro' }, action);

    expect(state).toEqual({logged: false})
  
  });
})