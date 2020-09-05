import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {SearchIcon} from '../../../common/icons/icons';

export const LocationInput = (
  props: React.ComponentProps<typeof TextInput>,
) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="enter locality here"
        style={styles.input}
        {...props}
      />
      <SearchIcon style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    marginVertical: 25,
  },
  input: {
    flex: 1,
    marginHorizontal: 15,
  },
  icon: {marginHorizontal: 15},
});
