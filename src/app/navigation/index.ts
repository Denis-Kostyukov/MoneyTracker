import {AppNavigatorScreens, AppNavigatorParamList} from 'app/navigation/app-navigator/AppNavigator.types.ts';
import {AppNavigator} from 'app/navigation/app-navigator/AppNavigator.component.tsx';
import {defaultStackConfig} from 'app/navigation/config/stackConfig.ts';
import {AuthStackScreen, AuthStackParamList} from 'app/navigation/stacks/auth/AuthStack.types.ts';
import {AuthStack} from 'app/navigation/stacks/auth/AuthStack.component.tsx';
export type {
  AppNavigatorParamList, AuthStackParamList
}

export {
  defaultStackConfig,
  AppNavigatorScreens,
  AppNavigator,
  AuthStackScreen,
  AuthStack
}
