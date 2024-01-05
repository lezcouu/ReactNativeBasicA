import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Timer = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 50,
    borderRadius: 15
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333'
  }
});
