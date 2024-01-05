import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { Timer } from './components/Timer';
import { Audio } from 'expo-av';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);

  const LINK_START = './assets/start.mp3';
  const LINK_STOP = './assets/stop.mp3';

  const playSound = async (DYNAMIC_LINK) => {
    const { sound } = await Audio.Sound.createAsync(require(LINK_START));
    await sound.playAsync();
  };

  const handleStartStop = () => {
    if (!!isActive) {
      playSound();
      setIsActive(!isActive);
    }
    if (!isActive) {
      playSound();
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    let interval = null;
    if (!!isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View>
        <Text style={styles.text}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <Timer time={time} />
        <TouchableOpacity onPress={() => handleStartStop()} style={styles.button}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>{isActive ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40
  },
  button: {
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#333333'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  }
});
