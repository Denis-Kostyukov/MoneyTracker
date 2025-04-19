import {RouteProp} from '@react-navigation/native';
import {BottomNavigatorParamList, BottomNavigatorTab} from 'app/navigation';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {useTheme} from 'shared/providers';

export const getScreenOptions = ({
  route,
}: {
  route: RouteProp<BottomNavigatorParamList, BottomNavigatorTab>;
}): BottomTabNavigationOptions => {
  const {theme} = useTheme();

  return {
    headerShown: false,
    sceneStyle: {
      backgroundColor: 'transparent',
    },
  };
};
