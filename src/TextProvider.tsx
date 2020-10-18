import React from 'react';

export const TextContext: React.Context<{}> = React.createContext({});

/**
 * Definition
 */
interface TextProviderProps {

/**
 * Key-value pair of text strings
 */
    globalText?: { [key: string]: string};

    children: any;
}

const TextProvider: React.FC<TextProviderProps> = (props: TextProviderProps) => {
  const { globalText, children } = props;
  return (
    <TextContext.Provider value={globalText}>
      {children}
    </TextContext.Provider>
  );
};

/**
 * Set default props
 */
TextProvider.defaultProps = {
  globalText: {},
};

export { TextProvider as default };
