import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {flex: 1, paddingHorizontal: '5%'},
  intro_logo: {width: 200, height: 100, alignSelf: 'center'},
  notice_card: {width: '100%', height: 200, borderRadius: 15},
  list_wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  bottom_text_wrapper: {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    justifyContent: 'center',
  },
  bottom_text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 22,
  },
  discover_heading: {
    marginVertical: '1%',
  },
  not_available_text: {
    textAlign: 'center',
  },
});
