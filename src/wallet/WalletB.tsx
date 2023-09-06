import React, {FC, useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {WalletContext} from './context';
import {WalletScreens} from './types';

type Props = NativeStackScreenProps<RootStackParamList, WalletScreens.WalletB>;

/**
 * WalletB Component
 *
 * @returns {React.ReactElement} WalletB.
 */
const WalletB: FC<Props> = ({navigation}): JSX.Element => {
  const styles = useStyles();
  const context = useContext(WalletContext);
  return (
    <View style={styles.container}>
      <Text>{context}</Text>
      <Text>Wallet B</Text>
      <Button
        title="got to inicio"
        // esta seria la forma de navegar a alguna de las pantallas del bottom tab
        onPress={() => navigation.navigate('BottomTabNav', {screen: 'Inicio'})}
      />
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default WalletB;
