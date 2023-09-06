import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

/**
 * Beneficios Component
 *
 * @returns {React.ReactElement} Beneficios.
 */
const Beneficios: FC<Props> = ({name}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Beneficios {name}</Text>
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

export default Beneficios;
