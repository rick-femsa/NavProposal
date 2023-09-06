import React, {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {AccountScreens} from './types';

type Props = NativeStackScreenProps<
  RootStackParamList,
  AccountScreens.AccountA
>;

/**
 * AccountA Component
 *
 * @returns {React.ReactElement} AccountA.
 */
const AccountA: FC<Props> = ({navigation}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Account A</Text>
      <Button
        title="Account B"
        onPress={() => navigation.navigate(AccountScreens.AccountB)}
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

export default AccountA;
