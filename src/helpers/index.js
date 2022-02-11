import { types } from '../types/type';
import { heroes } from './../data/heroes';


// convierte un string a un array , separando y eliminado todo
// lo que esta despues del @ y volviendo a convertirlo a un
// string para usarlo como un nombre de usuario
const nickName = (email) => {
  let arr = email.split('@')
  let nick =  arr.splice(0,1)
  
  return nick.join()
};


// Busca un heroe mediante un ID recibido
// el ID debe ser de tipo string
export const getHeroById = (id = '') => {
  return heroes.find(hero =>  hero.id === id)
}

// Retorna un arreglo que coincida con el publisher del 
// argumento que reciber esta funcion
export const getHeroByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`La categoria ${publisher} no existe`);
  };
  return heroes.filter(hero => hero.publisher === publisher);
}

// Retorna un arreglo nuevo con los nombres filtrados
// estos nombres se reciben por argumentos;
export const getHeroByName = (name = '') => {
  if (name === '') {
    return []
  };
  const heroName = name.toLowerCase()
  return heroes.filter(hero => hero.superhero.toLowerCase().includes(heroName))
}

// Verifica que los campos no esten vacios e inicia sesion 
export const loginUser = async(logIn, dispatch, navigate, setError,  emailUser, password) => {
  if ([emailUser, password].includes('')) {
    setError('Completa los campos');
    return
  }
  
  try {

    await logIn(emailUser,password);

    dispatch({
      type: types.login,
      payload: {
        name: nickName(emailUser)
      }
    });
    const lastPath = localStorage.getItem('lastPath') || '/'
    navigate(lastPath, {
      replace: true
    });
  } catch (error) {
    setError('Email y/o contraseña son incorrectas');
    setTimeout(() => setError(''), 2500);
  }
}

// verifica que las contraseñas conicidan o que lo los campos no esten vacios y  registra el nuevo usuario
export const registerUser = async (singUp, dispatch, navigate, setError, state) => {
  const { emailUser, password, passwordConfirm } = state;

  if (password !== passwordConfirm) {
    setError('Las contraseñas no son iguales');
    setTimeout(() => setError(''), 2500);
    return
  } else if ([emailUser, password].includes('')) {
    setError('Completa los campos');
    setTimeout(() => setError(''), 2500);
    return
  }
  try {

    await singUp(emailUser, password);
    dispatch({
      type: types.login,
      payload: {
        name: nickName(emailUser)
      }
    });

    navigate('/');
  } catch (error) {
    setError('Error en el servidor');
    setTimeout(() => setError(''), 2500)
  }
};


// Reducer: Segun su action agrega o elimina un hero
export const heroReducer = (state = [], action) => {

  const { type, payload } = action; 

  switch (type) {
    case 'addHero':
      return [...state, payload];
    
    case 'deleteHero':
      return state.filter(hero => hero.id !== payload);
        // dispara la accion de la alerta danger
    
    default:
      return state;
  };
}