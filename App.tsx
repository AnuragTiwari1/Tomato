/**
 * File Name: App.tsx
 * Description: This is the root component definition
 * @format
 */

import * as React from 'react';
import AppRouter from './src/Router';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

Entypo.loadFont();
IonIcons.loadFont();

export default function App() {
  return <AppRouter />;
}
