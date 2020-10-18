import { useContext } from 'react';
import { TextContext } from './TextProvider';

function useTextProvider({context = TextContext, values = {}, alt = ''}) {
  const globalText = useContext(context);
  return (id) => {
    let messageString = Object.prototype.hasOwnProperty.call(globalText, id) ? context[id] : alt;
    // Iterate through all the values given and replace with corresponding key values.
    Object.keys(values).forEach((key) => {
      messageString = messageString.replace(`{${key}}`, values[key]);
    });
    return messageString;
  };
}

export { useTextProvider as default };
