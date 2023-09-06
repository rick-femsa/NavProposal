import React, {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {WalletScreens} from './types';

type Props = NativeStackScreenProps<RootStackParamList, WalletScreens.WalletA>;

/**
 * WalletA Component
 *
 * @returns {React.ReactElement} WalletA.
 */
const WalletA: FC<Props> = ({navigation}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Wallet A</Text>
      <Button
        title="Wallet B"
        onPress={() => navigation.navigate(WalletScreens.WalletB)}
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

export default WalletA;
