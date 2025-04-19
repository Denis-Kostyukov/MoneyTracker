export enum AppNavigatorScreens {
  AUTH = 'AUTH',
  BOTTOM_NAVIGATION = 'BOTTOM_NAVIGATION',
}

export type AppNavigatorParamList = {
  [AppNavigatorScreens.AUTH]: undefined;
  [AppNavigatorScreens.BOTTOM_NAVIGATION]: undefined;
};
