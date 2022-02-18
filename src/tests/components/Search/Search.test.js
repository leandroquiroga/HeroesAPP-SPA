import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from './../../../components/Search/Search';


// mock de useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));


describe('Testing on compontent <SearchScreen />', () => {
  let wapper; 

  test('This test must showing corretly with default values', () => {
    const h1 = 'Busquedas';
    const alert = 'No hay resultados:';
    const pathSvg = '/assets/svg/search.svg'

    const wapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h1').text().trim()).toBe(h1);
    expect(wapper.find('.alert').text().trim()).toBe(alert);
    expect(wapper.find('img').prop('src')).toBe(pathSvg)
  });

  test('This test must showing an hero and the input with queryString value', () => {

    const hero = 'batman';
    const h5 = hero;

    const wapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h5').text().trim().toLocaleLowerCase()).toBe(h5)
    expect(wapper.find('input').prop('value')).toBe(hero);
  });

  test('This test must showing an error not finding an hero', () => {
    const urlInvalid = 'batman132';
    const wapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${urlInvalid}`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('.alert-danger').exists()).toBe(true);
    expect(wapper.find('.alert-danger').text().trim()).toBe(`No hay resultados: ${urlInvalid}`);
  });


  test('This test must calling the hooks useNavigate for execute the function onChange of the form', () => { 

    // creamos la funcion mock
    const setError = jest.fn();

    // probamos que llame al hook useState y simulamos el setError en caso
    // que el valueInput tenga un elemento. 
    jest.spyOn(React, 'useState')
        .mockImplementation(error => 
          [error = 'false', setError]
        )

    const nameInput = 'searchHeroe';
    const valueInput = 'batman';


    // debemos montar el comopoente 
    let wapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    
    // buscamos el input del formulario
    wapper.find('input').simulate('change', {
      target: {
        name: nameInput,
        value: valueInput,
      },
    });

    // ejecutamos el onSubmit del formulario
    wapper.find('form').prop('onSubmit')({
      preventDefault: () => { },
    });


    //se llama al useNavigate con el value del input 
    expect(mockNavigate).toHaveBeenCalledWith(`?q=${valueInput}`);
  });
})