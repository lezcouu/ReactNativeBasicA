import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const RenderButton = ({ isActive, time, onPress }) => {
  const ButtonText = useCallback(
    ({ isActive, time }) => {
      if (!isActive && +time !== 0) {
        return <Text style={styles.text}>Empezar</Text>;
      }
      if (!!isActive && +time !== 0) {
        return <Text style={styles.text}>Pausa</Text>;
      }
    },
    [isActive, time]
  );
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
      <ButtonText isActive={isActive} time={time} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 15,
    margin: 10,
    padding: 25
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
