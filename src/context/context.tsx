import { createContext, FC, useState, ReactNode } from "react";

interface GlobalContextType {
  helper: boolean;
  setHelper: (value: boolean) => void;
}

export const Context = createContext<GlobalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContext: FC<GlobalContextProviderProps> = ({ children }) => {
  const [helper, setHelper] = useState<boolean>(false);

  return (
    <Context.Provider value={{ helper, setHelper }}>
      {children}
    </Context.Provider>
  );
};
