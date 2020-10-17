import React from 'react';

export const TextContext = React.createContext<{}>({});

interface TextProviderProps {
  globalText: { [key: string]: string };
  children: React.ReactNode;
}

const TextProvider: React.FC<TextProviderProps> = (props: TextProviderProps) => {
  const { globalText = {}, children } = props;
  return <TextContext.Provider value={globalText}>{children}</TextContext.Provider>;
};

export { TextProvider as default };
