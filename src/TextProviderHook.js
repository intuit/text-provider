import { useContext } from 'react';
import { TextContext } from './TextProvider';

function useTextProvider(context = TextContext) {
  const globalText = useContext(context);
  return (key) => {
    if (Object.prototype.hasOwnProperty.call(globalText, key)) {
      return globalText[key];
    }
    return '';
  };
}

export { useTextProvider as default };
