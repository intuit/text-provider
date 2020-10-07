import React, { useContext } from 'react';
import { TextContext } from './TextProvider';

const withTextProvider = (SomeComponent) => {
  function TextProviderHOC (props) {
    const globalText = useContext(TextContext);

    function getTextForKey(key) {
      if (Object.prototype.hasOwnProperty.call(globalText, key)) {
        return globalText[key];
      }
      return '';
    }

    return (
      <SomeComponent
        getTextForKey={getTextForKey}
        {...props} /* eslint-disable-line react/jsx-props-no-spreading */
      />
    );
  }

  return TextProviderHOC;
};

export { withTextProvider as default };
