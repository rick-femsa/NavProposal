import React, {FC} from 'react';
import {createContext} from 'react';

export const AccountContext = createContext('');

interface Props {
  children: React.ReactNode;
}

const AccountProvider: FC<Props> = ({children}) => {
  return (
    <AccountContext.Provider value="hello">{children}</AccountContext.Provider>
  );
};

export default AccountProvider;
