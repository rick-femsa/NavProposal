import React, {FC} from 'react';
import {createContext} from 'react';

export const WalletContext = createContext('');

interface Props {
  children: React.ReactNode;
}

const WalletProvider: FC<Props> = ({children}) => {
  return (
    <WalletContext.Provider value="hello from wallet ctx">
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
