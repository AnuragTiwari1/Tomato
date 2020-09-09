import * as React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {SearchIcon} from '../../../common/icons/icons';
import {SEARCH_PLACEHOLDER} from '../../../lang/common';

export const LocationInput = React.forwardRef<
  TextInput,
  React.ComponentProps<typeof TextInput> & {isLoading?: boolean}
>((props, ref) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={SEARCH_PLACEHOLDER}
        style={styles.input}
        ref={ref}
        {...props}
      />
      {props.isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <SearchIcon style={styles.icon} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    marginVertical: 25,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
  },
  input: {
    flex: 1,
    marginHorizontal: 15,
  },
  icon: {marginHorizontal: 15},
});
