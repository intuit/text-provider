import FormattedMessage from '../src/FormattedMessage';

describe('<FormattedMessage /> rendering', () => {
  const randomId = 'Random Id';
  const values = {
    valueToBeInjected: 'Random Value',
  };

  it('should have default value and alt props', () => {
    expect(FormattedMessage.defaultProps.values).toBeDefined();
    expect(FormattedMessage.defaultProps.alt).toBeDefined();
  });

  it('should render FormattedMessage', () => {
    let wrapper = shallow(<FormattedMessage id={randomId} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('FormattedMessage should have span element', () => {
    let wrapper = mount(<FormattedMessage id={randomId} values={values} />);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
