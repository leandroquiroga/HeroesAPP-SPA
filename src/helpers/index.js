import { heroes } from './../data/heroes';

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
  }

  return heroes.filter(hero => hero.publisher === publisher);
}


// Retorna un arreglo nuevo con los nombres filtrados
// estos nombres se reciben por argumentos;

export const getHeroByName = (name = '') => {


  if (name === '') {
    return []
  }

  const heroName = name.toLowerCase()
  return heroes.filter(hero => hero.superhero.toLowerCase().includes(heroName))
}