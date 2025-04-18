import {StackNavigationOptions, TransitionSpecs} from '@react-navigation/stack';

export const defaultStackConfig = (): StackNavigationOptions => ({
  headerShown: false,
  gestureDirection: 'horizontal',
  cardStyle: {
    backgroundColor: 'transparent',
  },
});
