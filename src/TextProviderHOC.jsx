import React from 'react';
import { TextContext } from './TextProvider';

const withTextProvider = (SomeComponent) => {
  /* eslint-disable-line no-unused-vars */
  class TextProviderHOC extends React.Component {
    constructor(props) {
      super(props);
      this.getTextForKey = this.getTextForKey.bind(this);
    }

    getTextForKey(id, values = {}) {
      const globalText = this.context;
      let messageString = Object.prototype.hasOwnProperty.call(globalText, id)
        ? globalText[id]
        : '';
      /**
       * Iterate through all the keys given as the prop and replace with corresponding values.
       */
      Object.keys(values).forEach((key) => {
        messageString = messageString.replace(`{${key}}`, values[key]);
      });
      return messageString;
    }

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

  return TextProviderHOC;
};

export { withTextProvider as default };
