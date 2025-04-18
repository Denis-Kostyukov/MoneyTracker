import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
import {
  AppNavigatorParamList,
  AppNavigatorScreens,
  AuthStack,
  defaultStackConfig,
} from 'app/navigation';

const RootStack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator: FC = () => {
  return (
    <RootStack.Navigator screenOptions={defaultStackConfig}>
      <RootStack.Screen name={AppNavigatorScreens.AUTH} component={AuthStack} />
    </RootStack.Navigator>
  );
};
