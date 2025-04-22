import {NavigatorScreenParams} from '@react-navigation/native';
import {StandaloneStackParamList} from 'app/navigation';

export enum AppNavigatorScreens {
  AUTH = 'AUTH',
  BOTTOM_NAVIGATION = 'BOTTOM_NAVIGATION',
  STANDALONE = 'STANDALONE',
}

export type AppNavigatorParamList = {
  [AppNavigatorScreens.AUTH]: undefined;
  [AppNavigatorScreens.BOTTOM_NAVIGATION]: undefined;
  [AppNavigatorScreens.STANDALONE]:
    | undefined
    | NavigatorScreenParams<StandaloneStackParamList>;
};
