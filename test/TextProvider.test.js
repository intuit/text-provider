import TextProvider from '../src/TextProvider';
import FormattedMessage from '../src/FormattedMessage';

describe('<TextProvider /> rendering', () => {
  const randomId = 'Random Id';
  const values = {
    valueToBeInjected: 'Random Value',
  };
  const sampleText = {
    'Random Id': '{valueToBeInjected}',
  };

  it('should have default globalText prop', () => {
    expect(TextProvider.defaultProps.globalText).toBeDefined();
  });

  it('should render TextProvider', () => {
    let wrapper = shallow(<TextProvider children={<div />} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the child node provided as prop', () => {
    let wrapper = shallow(
      <TextProvider
        globalText={sampleText}
        children={<FormattedMessage id={randomId} values={values} />}
      />,
    );
    expect(wrapper.children('FormattedMessage')).toHaveLength(1);
    expect(wrapper.find('FormattedMessage').props().id).toBe(randomId);
    expect(wrapper.find('FormattedMessage').props().values).toBe(values);
  });

  it('should replace the id with value in the context message', () => {
    let wrapper = mount(
      <TextProvider
        globalText={sampleText}
        children={<FormattedMessage id={randomId} values={values} />}
      />,
    );
    expect(wrapper.getDOMNode().innerHTML).toBe(values['valueToBeInjected']);
  });
});
