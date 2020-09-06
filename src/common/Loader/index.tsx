/*
 * fileName: index.tsx
 * description: this file contains the implementation of the app loader
 */

import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';
import {TOMATO} from '../../assets';
import {Pulse} from './Pulse';

export const Loader = ({textMessage}: {textMessage: string}) => {
  return (
    <View style={styles.container}>
      <Pulse />
      <Image source={TOMATO} style={styles.logo} />
      <Text style={styles.textMessage}>{textMessage}</Text>
    </View>
  );
};
