export enum BottomNavigatorTab {
  INCOME = 'INCOME',
  EXPENSES = 'EXPENSES',
  SETTINGS = 'SETTINGS',
}
export type BottomNavigatorParamList = {
  [BottomNavigatorTab.INCOME]: undefined;
  [BottomNavigatorTab.EXPENSES]: undefined;
  [BottomNavigatorTab.SETTINGS]: undefined;
};
