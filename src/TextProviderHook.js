import { useContext } from 'react';

function useTextProvider(context) {
  const globalText = useContext(context);
  return (key) => {
    if (Object.prototype.hasOwnProperty.call(globalText, key)) {
      return globalText[key];
    }
    return '';
  };
}

export { useTextProvider as default };
