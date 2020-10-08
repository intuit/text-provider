import React from 'react';
import { TextContext } from './TextProvider';

const withTextProvider = (SomeComponent) => {
  /* eslint-disable-line no-unused-vars */
  class TextProviderHOC extends React.Component {
    constructor(props) {
      super(props);
      this.getTextForKey = this.getTextForKey.bind(this);
    }

    getTextForKey(key) {
      const globalText = this.context;
      if (Object.prototype.hasOwnProperty.call(globalText, key)) {
        return globalText[key];
      }
      return '';
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
