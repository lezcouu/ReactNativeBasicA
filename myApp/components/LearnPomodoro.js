import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LearnPomodoro = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleContainer.text}>Un poquito mas</Text>
        </View>
        <View style={styles.titleContainer.iconContainer}>
          <Text style={{ textAlign: 'center', color: 'white' }}>!</Text>
        </View>
      </View>
      <Text style={styles.hint}>
        El método de estudio Pomodoro Si tenés problemas para concentrarte al momento de estudiar, hoy te traemos toda
        la información que necesitás para aplicar el método de estudio Pomodoro. Esta técnica consiste en trabajar
        concentrado durante breves periodos de tiempo y tomar pequeños descansos. El resultado: mejora tu concentración
        y rendimiento, sin saturarte la cabeza. Como mencionamos anteriormente, el método consiste en dividir el tiempo
        de estudio en pequeños bloques de 25 minutos, con intervalos de descanso de 5 minutos. Esto se hace con el
        objetivo de optimizar la concentración, reduciéndola a un bloque de tiempo específico, y relajando la mente
        durante el intervalo. En este sentido, un Pomodoro equivale a un bloque de dicho lapso temporal. Como dato de
        color, esta herramienta data de los 80 y fue inventada por el italiano Francesco Cirillo, quien pretendía
        mejorar su capacidad de estudio. Pomodoro quiere decir tomate, y le debe el nombre al temporizador que usaba su
        inventor, que tenía la forma de la fruta mencionada.{' '}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  hint: {
    fontSize: 17,
    fontWeight: 500,
    margin: 10
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 5,
    icon: {
      backgroundColor: 'red',
      borderWidth: 1,
      color: 'white',
      fontSize: 17,
      fontWeight: 'bold'
    },
    iconContainer: {
      backgroundColor: '#ed5665',
      borderRadius: 10,
      borderWidth: 1,
      exclamation: {
        color: 'white',
        textAlign: 'center'
      },
      height: 20,
      width: 20
    },
    marginHorizontal: 10,
    text: {
      fontSize: 17,
      fontWeight: 'bold'
    }
  }
});
