import React, {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {AccountScreens} from './types';

type Props = NativeStackScreenProps<RootStackParamList>;

/**
 * account Component
 *
 * @returns {React.ReactElement} account.
 */
const Account: FC<Props> = ({navigation}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Mi Cuenta</Text>
      <Button
        title="Account A"
        onPress={() => navigation.navigate(AccountScreens.AccountA)}
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

export default Account;
