import React, {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

/**
 * Wallet Component
 *
 * @returns {React.ReactElement} Wallet.
 */
const Wallet: FC<Props> = ({navigation}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
      <Button
        title="ir a beneficios"
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

export default Wallet;
