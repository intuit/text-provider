import React from 'react';

export const TextContext = React.createContext<object>({});

interface TextProviderProps {
  globalText: any;
  children: React.ReactNode,

}

const TextProvider: React.FC<TextProviderProps> = (props: TextProviderProps) => {
  const { globalText = {}, children } = props;
  return (
    <TextContext.Provider value={globalText}>
      {children}
    </TextContext.Provider>
  );
};

export { TextProvider as default };
