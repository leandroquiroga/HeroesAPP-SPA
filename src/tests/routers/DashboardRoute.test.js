import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { DashboardRoute } from "../../routers/DashboardRoute"


describe('Testing in <DashboardRoute/>', () => {
  
  test('This test must showing the component <Main /> corretly', () => {
    const contexValue = {
      user: {
        logged: true,
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
      ]
    }
    
    const wapper = mount(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoute />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h1').text().trim()).toBe('Superheroes favoritos');
    expect(contexValue.hero.length).toBeGreaterThan(0);
  });

  test('This test must showing the component <Main /> if hero.length === 0', () => {
    const contexValue = {
      user: {
        logged: true,
        name: 'Leandro'
      },
      hero: []
    }

    const textInfo = 'No hay superheroes en la lista de favoritos...'
    
    const wapper = mount(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter>
          <DashboardRoute initialEntries={['/']} />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('p').text().trim()).toBe(textInfo);
    expect(contexValue.hero.length).toBe(0);
  });

  test('This test must showing the component <MarvelScreen /> correctly', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Leandro',
      },
    };

    const titleMarvel = 'Marvel Screen'

    const wapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <DashboardRoute />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h1').text().trim()).toBe(titleMarvel);
    
  });

  test('This test must showing the components <DCScreen /> correctly', () => {
    const contexValue = {
      user: {
        logged: true, 
        name: 'Pepito'
      },
    };

    const titleDC = 'DC Screen'

    const wapper = mount(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoute />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wapper).toMatchSnapshot();
    expect(wapper.find('h1').text().trim()).toBe(titleDC);
  })


});