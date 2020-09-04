import * as React from 'react';
import {StyleSheet, Animated} from 'react-native';

const MAX_SIZE = 300;
const DURATION = 3000;

export const Pulse = () => {
  const sizeAnim = React.useRef(new Animated.Value(0.1)).current;
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    const grow = () => {
      return Animated.loop(
        Animated.timing(sizeAnim, {
          toValue: 1.5,
          duration: DURATION,
          useNativeDriver: true,
        }),
      );
    };

    const fade = () => {
      return Animated.loop(
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: true,
        }),
      );
    };
    Animated.parallel([grow(), fade()]).start();
  }, [fadeAnim, sizeAnim]);

  return (
    <Animated.View
      style={[
        styles.circleWrapper,
        {
          opacity: fadeAnim,
          transform: [{scale: sizeAnim}],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circleWrapper: {
    backgroundColor: 'pink',
    borderWidth: 4,
    borderRadius: MAX_SIZE / 2,
    position: 'absolute',
    width: MAX_SIZE,
    height: MAX_SIZE,
  },
});
