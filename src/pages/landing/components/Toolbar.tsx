import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {LocationIcon} from '../../../common/icons/icons';

export const Toolbar = () => {
  return (
    <View style={styles.wrapper}>
      <LocationIcon size="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
});
