import React from 'react';
import PropTypes from 'prop-types';
import { TextContext } from './TextProvider';

const withTextProvider = (SomeComponent) => {
  /* eslint-disable-line no-unused-vars */
  class TextProviderHOC extends React.Component {
    getTextForKey = id => {
      const { values, alt } = props;
      let messageString = Object.prototype.hasOwnProperty.call(this.context, id) ? this.context[id] : alt;
      // Iterate through all the values given and replace with corresponding key values.
      Object.keys(values).forEach((key) => {
        messageString = messageString.replace(`{${key}}`, values[key]);
      });
      return messageString;
    };

    render() {
      return (
        <SomeComponent
          getTextForKey={this.getTextForKey}
          {...this.props} /* eslint-disable-line react/jsx-props-no-spreading */
        />
      );
    }
  }

  TextProviderHOC.contextType = TextContext;

  TextProviderHOC.propTypes = {
    values: PropTypes.objectOf(PropTypes.object),
    alt: PropTypes.string,
  };

  TextProviderHOC.defaultProps = {
    values: {},
    alt: '',
  };

  return TextProviderHOC;
};

export { withTextProvider as default };
