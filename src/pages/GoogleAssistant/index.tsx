import * as React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {TextPresets} from '../../common/styles/textPresets';
import {styles} from './styles';
import {ScreenPresets} from '../../common/styles/screenPresets';
import {HomeIcon} from '../../common/icons/icons';

export const GoogleAssistantScreen = () => {
  return (
    <SafeAreaView style={ScreenPresets.fullScreen}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={[TextPresets.large]}>Have a nice evening, Anu</Text>
          <HomeIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};
