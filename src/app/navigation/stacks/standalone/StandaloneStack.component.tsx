import {createStackNavigator} from '@react-navigation/stack';
import {
  defaultStackConfig,
  StandaloneStackParamList,
  StandaloneStackScreen,
} from 'app/navigation';
import {FC} from 'react';
import {AddTransaction} from 'features/finances';

const Stack = createStackNavigator<StandaloneStackParamList>();

export const StandaloneStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackConfig}>
      <Stack.Screen
        name={StandaloneStackScreen.ADD_TRANSACTION}
        component={AddTransaction}
      />
    </Stack.Navigator>
  );
};
