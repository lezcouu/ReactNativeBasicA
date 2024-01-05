import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { Timer } from './components/Timer';
import { Audio } from 'expo-av';
import { RenderButton } from './components/RenderButton';
import { LearPomodoro } from './components/LearPomodoro';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);

  const LINK_START = './assets/start.mp3';
  const LINK_STOP = './assets/stop.mp3';

  const playSound = async (start) => {
    if (start) {
      const { sound } = await Audio.Sound.createAsync(require(LINK_START));
      return await sound.playAsync();
    }

    const { sound } = await Audio.Sound.createAsync(require(LINK_STOP));
    await sound.playAsync();
  };

  const handleStartStop = (restart) => {
    if (restart) {
      playSound('start');
      return setIsActive(false);
    }
    if (!!isActive) {
      playSound();
      setIsActive(!isActive);
    }
    if (!isActive) {
      playSound('start');
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    let interval = null;
    if (!!isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      playSound();
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
        <Header
          handleStartStop={handleStartStop}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />
        <RenderButton isActive={isActive} time={time} onPress={handleStartStop} />
      </View>
      <View>
        <LearPomodoro />
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 40
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 10
  }
});
