import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const options = ['Pomodoro', 'Long Break', 'Short Break'];

export const Header = ({ handleStartStop, currentTime, setCurrentTime, setTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 15 : 5;
    setCurrentTime(index);
    setTime(newTime * 60);
    handleStartStop('restart');
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      {options.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          style={[styles.itemStyle, currentTime !== index && { borderColor: 'transparent' }]}
        >
          <Text style={{ fontWeight: 'bold' }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 5,
    width: '33%'
  }
});
