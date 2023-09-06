import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Inicio from './inicio';
import Account from './account';
import Wallet from './wallet';
import Beneficios from './beneficios';

const {Navigator, Screen} = createBottomTabNavigator();

export interface ITab {
  screenName: string;
  screenComp: React.ComponentType<any>;
  Icon: React.ComponentType<any>;
  iconName: string;
}

const TABS: ITab[] = [
  {
    screenName: 'Inicio',
    screenComp: Inicio,
    Icon: AntDesign,
    iconName: 'user',
  },
  {
    screenName: 'Beneficios',
    screenComp: Beneficios,
    Icon: Feather,
    iconName: 'gift',
  },
  {
    screenName: 'Wallet',
    screenComp: Wallet,
    Icon: Ionicons,
    iconName: 'ios-wallet',
  },
  {
    screenName: 'Account',
    screenComp: Account,
    Icon: Feather,
    iconName: 'user',
  },
];

const icons = (
  tab: ITab | undefined,
  size: number,
  color: string,
): JSX.Element => {
  if (tab) {
    const {Icon, iconName} = tab;
    return <Icon name={iconName} size={size} color={color} />;
  }
  return <></>;
};

/**
 * TabNav Component
 * this componet handle the home screens for each tab
 *
 * @returns {React.ReactElement} TabNav.
 */
const BottomTabNav = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const tab = TABS.find(e => e.screenName === route.name);
          return icons(tab, size, color);
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      {TABS.map((e, i) => (
        <Screen name={e.screenName} component={e.screenComp} key={i} />
      ))}
    </Navigator>
  );
};

export default BottomTabNav;
