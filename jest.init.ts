import 'react-native';
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper'); //this disables the useNativeDriver warnings

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});
