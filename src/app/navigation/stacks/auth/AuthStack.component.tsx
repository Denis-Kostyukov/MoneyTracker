import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
import {
  AuthStackParamList,
  AuthStackScreen,
} from 'app/navigation/stacks/auth/AuthStack.types.ts';
import {SignIn} from 'features/auth/sign-in';
import {defaultStackConfig} from 'app/navigation';
import {SignUp} from 'features/auth/sign-up';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackConfig}>
      <Stack.Screen name={AuthStackScreen.SIGN_IN} component={SignIn} />
      <Stack.Screen name={AuthStackScreen.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
};
