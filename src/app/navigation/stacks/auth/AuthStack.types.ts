export enum AuthStackScreen {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}
export type AuthStackParamList = {
  [AuthStackScreen.SIGN_IN]: undefined;
  [AuthStackScreen.SIGN_UP]: undefined;
};
