import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
import {
  AppNavigatorParamList,
  AppNavigatorScreens,
  AuthStack,
  BottomNavigator,
  defaultStackConfig,
} from 'app/navigation';
import {useUserStore} from 'shared/store/user-store';

const RootStack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator: FC = () => {
  const {user} = useUserStore();

  return (
    <RootStack.Navigator screenOptions={defaultStackConfig}>
      {user ? (
        <RootStack.Screen
          name={AppNavigatorScreens.BOTTOM_NAVIGATION}
          component={BottomNavigator}
        />
      ) : (
        <RootStack.Screen
          name={AppNavigatorScreens.AUTH}
          component={AuthStack}
        />
      )}
    </RootStack.Navigator>
  );
};
