import {StyleSheet} from 'react-native';
import {spacing} from '../../common/styles/spacing';

export const styles = StyleSheet.create({
  container: {
    padding: `${spacing.small}%`,
    paddingBottom: 0,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
