export enum BottomNavigatorTab {
  INCOME = 'INCOME',
  SETTINGS = 'SETTINGS',
}
export type BottomNavigatorParamList = {
  [BottomNavigatorTab.INCOME]: undefined;
  [BottomNavigatorTab.SETTINGS]: undefined;
};
