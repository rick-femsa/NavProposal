import React from 'react';
import WalletA from './WalletA';
import WalletB from './WalletB';
import {Screen} from '../Navigation';
import {WalletScreens} from './types';

/**
 * Routes Component
 *
 * @returns {React.ReactElement} Routes.
 */
const Routes = (): JSX.Element => {
  return (
    <>
      <Screen name={WalletScreens.WalletA} component={WalletA} />
      <Screen name={WalletScreens.WalletB} component={WalletB} />
    </>
  );
};

export default Routes;
