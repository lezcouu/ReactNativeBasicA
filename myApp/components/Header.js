import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export const Header = ({ currentTime, setCurrentTime, setTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
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
    width: '33%',
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    marginVertical: 20
  }
});
