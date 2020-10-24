import React from 'react';
import renderer from 'react-test-renderer';
import TextProvider from '../src/TextProvider';
import withTextProvider from '../src/TextProviderHOC';

describe('<TextProviderHOC /> rendering', () => {
  class SomeComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <div>{this.props.id ? this.props.id : 'id'}</div>;
    }
  }

  it('should render TextProviderHOC correctly', () => {
    const MockWithHOC = withTextProvider(SomeComponent);

    const wrapper = renderer.create(<MockWithHOC />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should add getTextForKey as prop for component', () => {
    const MockWithHOC = withTextProvider(SomeComponent);

    const wrapper = renderer.create(<MockWithHOC />).root;
    expect(wrapper.findByType(SomeComponent).props.getTextForKey).toBeDefined();

    // TextProviderHOC uses {} as default context
    expect(wrapper.findByType(SomeComponent).props.getTextForKey('test')).toEqual('');
  });

  it('should render the component provided along with props', () => {
    const MockWithHOC = withTextProvider(SomeComponent);
    const wrapper = renderer.create(<MockWithHOC id="id" />).root;
    expect(wrapper.findByType(SomeComponent).props.id).toEqual('id');
  });

  it('test getTextForKey with context', () => {
    let context = { id: 'test id' };
    const MockWithHOC = withTextProvider(SomeComponent);
    let wrapper = renderer.create(<TextProvider globalText={context} children={<MockWithHOC />} />)
      .root;
    expect(wrapper.findByType(SomeComponent).props.getTextForKey('id')).toEqual(context.id);
  });
});
