import React, {FC, useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {AccountContext} from './context';
import {AccountScreens} from './types';
import {WalletScreens} from '../wallet/types';

type Props = NativeStackScreenProps<
  RootStackParamList,
  AccountScreens.AccountB
>;

/**
 * AccountA Component
 *
 * @returns {React.ReactElement} AccountA.
 */
const AccountB: FC<Props> = ({navigation}): JSX.Element => {
  const styles = useStyles();
  const context = useContext(AccountContext);

  return (
    <View style={styles.container}>
      <Text>Account B</Text>
      <Text>Info del context: {context}</Text>
      {/* Esta Seria la manera de navegar entre los paquetes de este paquete de
       Account se puede ir facilmente a Wallet, (teniendo el tipado correcto el
       El IDE puede sugerir y autocompletar el nombre de la screen)*/}
      <Button
        title="Wallet A"
        onPress={() => navigation.navigate(WalletScreens.WalletA)}
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

export default AccountB;
