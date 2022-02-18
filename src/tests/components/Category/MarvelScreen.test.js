import { MarvelScreen } from './../../../components/Category/MarvelScreen';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Test on Component <MarvelScree />', () => {

  test('This test must return a snapshot corretly', () => {

    const wapper = shallow(<MarvelScreen />);

    expect(toJson(wapper)).toMatchSnapshot();
  })
});

