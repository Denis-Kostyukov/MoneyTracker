import {StackNavigationOptions} from '@react-navigation/stack';

export const defaultStackConfig = (): StackNavigationOptions => ({
  headerShown: false,
  gestureDirection: 'horizontal',
  cardStyle: {
    backgroundColor: 'transparent',
  },
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width],
                })
              : 0,
          },
        ],
      },
    };
  },
});
