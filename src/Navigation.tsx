import * as React from 'react';
import {
  NavigatorScreenParams,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from './BottomTabNav';
import {AccountParamsList, Routes} from './account';
import {WalletParamsList, Routes as WalletRoutes} from './wallet';

type BottomList = {
  Wallet: undefined;
  Inicio: undefined;
  Beneficios: undefined;
  Account: undefined;
};

type BaseRoot = {
  BottomTabNav: NavigatorScreenParams<BottomList>;
};

export type RootStackParamList = BaseRoot &
  AccountParamsList &
  WalletParamsList;

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

function NavComp() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="BottomTabNav"
          component={Inicio}
          options={{headerShown: false}}
        />
        {Routes()}
        {WalletRoutes()}
      </Navigator>
    </NavigationContainer>
  );
}

export {Screen};

export default NavComp;
