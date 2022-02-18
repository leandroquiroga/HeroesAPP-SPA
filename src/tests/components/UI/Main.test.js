import { mount, shallow } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { HeroFavourites } from "../../../components/Heores/HeroFavourites";
import { Main } from "../../../components/UI/Main";

describe('Testing on component <Main />', () => {

  test('This test must showing the component <Main /> correctly', () => {
    const contextValueHero = {
      dispatch: jest.fn(),
      hero: [
        {
          'id': 'dc-batman',
          'superhero': 'Batman',
          'publisher': 'DC Comics',
          'alter_ego': 'Bruce Wayne',
          'first_appearance': 'Detective Comics #27',
          'characters': 'Bruce Wayne'
        },
      ]
    };
  
    const wapper = mount(
      <AuthContext.Provider value={contextValueHero}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    
    expect(wapper).toMatchSnapshot();
    expect(wapper.find('.container-card').exists()).toBe(true);
    expect(wapper.find('h5').text().trim()).toBe('Batman');
    expect(wapper.find('.Toastify').exists()).toBe(true)

  });




  test('This test must showing the componente <Main /> if hero.length === 0', () => {
    const contextValueHero = {
      dispatch: jest.fn(),
      hero: []
    };

  const pathIMG = `/assets/img/not-super-hero.png`


    const wapper = mount(
      <AuthContext.Provider value={contextValueHero}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('p').text().trim()).toBe('No hay superheroes en la lista de favoritos...')
    expect(wapper.find('img').prop('src')).toBe(pathIMG);
  });
});

describe('Testing on component <HeroFavourites />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    hero: [
      {
        'id': 'dc-batman',
        'superhero': 'Batman',
        'publisher': 'DC Comics',
        'alter_ego': 'Bruce Wayne',
        'first_appearance': 'Detective Comics #27',
        'characters': 'Bruce Wayne'
      },
    ]
  };
  const { hero, dispatch } = contextValue;
  const pathCloseSVG = `/assets/svg/close.svg`

  const wapperHero = shallow(
    <HeroFavourites
      key={hero.id}
      data={hero}
      pathCloseSVG={pathCloseSVG}
      dispatchHero={dispatch}
    />
  );
  test('This test must showing the comoponente <HeroFavourites /> with their props respectively', () => {

    expect(wapperHero).toMatchSnapshot();
  });
})