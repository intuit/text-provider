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

  it('should render TextProviderHOC', () => {
    const MockWithHOC = withTextProvider(SomeComponent);

    const wrapper = shallow(<MockWithHOC id="id" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the componnet provided along with props', () => {
    const MockWithHOC = withTextProvider(SomeComponent);
    const wrapper = shallow(<MockWithHOC id="id" />);

    // TextProviderHOC uses {} as default context
    expect(wrapper.find('SomeComponent').props().id).toEqual('id');
  });
});
