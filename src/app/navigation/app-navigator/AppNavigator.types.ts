export enum AppNavigatorScreens {
  AUTH = 'AUTH',
  MAIN = 'MAIN',
}

export type AppNavigatorParamList = {
  [AppNavigatorScreens.AUTH]: undefined;
  [AppNavigatorScreens.MAIN]: undefined;
};
