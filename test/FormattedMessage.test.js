import FormattedMessage from '../src/FormattedMessage';

describe('<FormattedMessage /> rendering', () => {
  it('should have default value and alt props', () => {
    expect(FormattedMessage.defaultProps.values).toBeDefined();
    expect(FormattedMessage.defaultProps.alt).toBeDefined();
  });
});
