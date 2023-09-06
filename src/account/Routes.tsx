import React from 'react';
import AccountA from './AccountA';
import AccountB from './AccountB';
import {Screen} from '../Navigation';
import {AccountScreens} from './types';

/**
 * Routes Component
 *
 * @returns {React.ReactElement} Routes.
 */
const Routes = (): JSX.Element => {
  return (
    <>
      <Screen name={AccountScreens.AccountA} component={AccountA} />
      <Screen name={AccountScreens.AccountB} component={AccountB} />
    </>
  );
};

export default Routes;
