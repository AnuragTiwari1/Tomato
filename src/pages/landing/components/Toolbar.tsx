import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {LocationIcon, HomeIcon, MenuIcon} from '../../../common/icons/icons';

export const Toolbar = () => {
  return (
    <View style={styles.wrapper}>
      <HomeIcon style={styles.iconStyle} />
      <View style={styles.rightToolbar}>
        <MenuIcon style={styles.iconStyle} />
        <LocationIcon style={styles.iconStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: '3%',
  },
  rightToolbar: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  iconStyle: {
    marginHorizontal: '3%',
    marginVertical: '1%',
  },
});
