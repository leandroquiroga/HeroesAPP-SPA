import { DCScreen } from './../../../components/Category/DCScreen';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Testing on component <DCScreen/>', () => {
  
  test('This test must return a snapshot corretly', () => {
    const wapper = shallow(<DCScreen />);

    expect(toJson(wapper)).toMatchSnapshot();
  })
})