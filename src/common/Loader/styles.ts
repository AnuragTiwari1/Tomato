import {StyleSheet} from 'react-native';

export const LOGO_SIZE = 80;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
  },
  textMessage: {
    color: 'grey',
    marginTop: '5%',
  },
});
