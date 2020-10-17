import React from 'react';

export const TextContext = React.createContext<{}>({});

interface Props {
  globalText: { [key: string]: string };
  children: React.ReactNode;
}

const TextProvider: React.FC<Props> = ({ globalText = {}, children }: Props) => (
  <TextContext.Provider value={globalText}>{children}</TextContext.Provider>
);

export { TextProvider as default };
