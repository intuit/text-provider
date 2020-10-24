import React from 'react';
import renderer from 'react-test-renderer';
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

  it('should render correctly', () => {
    let wrapper = renderer.create(
      <TextProvider
        globalText={sampleText}
        children={<FormattedMessage id={randomId} values={values} />}
      />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should replace the id with value in the context message', () => {
    let wrapper = renderer.create(
      <TextProvider
        globalText={sampleText}
        children={<FormattedMessage id={randomId} values={values} />}
      />,
    );
    expect(wrapper.toJSON().props.style.fontSize).toBe('inherit');
    expect(wrapper.toJSON().props.dangerouslySetInnerHTML.__html).toBe(values['valueToBeInjected']);
  });
});
