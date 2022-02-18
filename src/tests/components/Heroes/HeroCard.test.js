
import { HeroCard } from './../../../components/Heores/HeroCard';
import { mount, shallow } from 'enzyme';
import { AuthContext } from '../../../auth/authContext';
import { MemoryRouter } from 'react-router-dom';


describe('Testing on <HeroCard />', () => {


  test('This test must should display the component corretcly', () => {
    
    const contextValue = {
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
    }
    
    const { hero } = contextValue;
    const wapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroCard />
      </MemoryRouter>
    );

    console.log(wapper.html())
  })
})