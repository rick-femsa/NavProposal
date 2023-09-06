import withProviders from './src/withProviders';
// Providers form PKGs
import {AccountProvider} from './src/account';
import WalletProvider from './src/wallet/context';
import NavComp from './src/Navigation';

/**
 * En este punto de entrada estaremos recibiendo los providers de los diferentes
 * paquetes core, theme, home etc. para pasarlos al HOC withProviders
 *
 */
const App = withProviders(NavComp, [AccountProvider, WalletProvider]);

export default App;
