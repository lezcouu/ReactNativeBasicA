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
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 50
  },
  time: {
    color: '#333333',
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
