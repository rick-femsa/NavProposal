import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

/**
 * Inicio Component
 *
 * @returns {React.ReactElement} Inicio.
 */
const Inicio: FC<Props> = ({name}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Inicio {name}</Text>
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

export default Inicio;
