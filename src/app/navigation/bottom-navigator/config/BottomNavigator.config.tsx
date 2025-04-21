import {RouteProp} from '@react-navigation/native';
import {BottomNavigatorParamList, BottomNavigatorTab} from 'app/navigation';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {useTheme} from 'shared/providers';
import IconIncome from 'app/navigation/bottom-navigator/assets/icons/IconIncome.tsx';
import {
  IconExpenses,
  IconSettings,
} from 'app/navigation/bottom-navigator/assets/icons';
import {useMemo} from 'react';

export const getScreenOptions = ({
  route,
}: {
  route: RouteProp<BottomNavigatorParamList, BottomNavigatorTab>;
}): BottomTabNavigationOptions => {
  const {theme} = useTheme();

  const icons = useMemo(() => {
    return {
      [BottomNavigatorTab.INCOME]: IconIncome,
      [BottomNavigatorTab.EXPENSES]: IconExpenses,
      [BottomNavigatorTab.SETTINGS]: IconSettings,
    };
  }, []);

  return {
    headerShown: false,
    sceneStyle: {
      backgroundColor: theme.background,
    },
    tabBarIcon: ({focused}) => {
      const Icon = icons[route.name];
      return <Icon fill={focused ? theme.text : theme.border} />;
    },
    tabBarActiveTintColor: theme.text,
    tabBarInactiveTintColor: theme.border,
    tabBarStyle: {
      height: 70,
      borderTopWidth: 1,
      borderTopColor: theme.border,
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: theme.background,
      elevation: 0,
      shadowOpacity: 0,
      alignItems: 'center',
    },
  };
};
