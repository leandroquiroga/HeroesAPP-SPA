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

// Login user
export const loginUser = async(logIn, dispatch, navigate, setError,  state, currentUser) => {
  const { emailUser, password } = state;
  try {
    await logIn(emailUser,password);

    dispatch({
      type: types.login,
      payload: {
        name: nickName(currentUser.email)
      }
    });
    const lastPath = localStorage.getItem('lastPath') || '/'
    navigate(lastPath, {
      replace: true
    });
  } catch (error) {
    setError('El email y/o contraseña son incorrectos');
    setTimeout(() => setError(''), 2500);
  }
}

// register user
export const registerUser = async (singUp, dispatch, navigate, setError, state) => {
  const { emailUser, password } = state;
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
    console.log(error);
    setError('Error en el servidor');
    setTimeout(() => setError(''), 2500)
  }
};