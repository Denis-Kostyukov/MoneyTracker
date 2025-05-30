import {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParamList, BottomNavigatorTab} from 'app/navigation';
import {Settings} from 'screens/settings';
import {Income} from 'screens/income';
import {Expenses} from 'screens/expenses';
import {getScreenOptions} from 'app/navigation/bottom-navigator/config/BottomNavigator.config.tsx';
import {CustomHeader} from 'app/navigation/bottom-navigator/components';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

const BottomNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...getScreenOptions({route}),
      })}>
      <Tab.Screen
        name={BottomNavigatorTab.INCOME}
        component={Income}
        options={{header: () => <CustomHeader />}}
      />
      <Tab.Screen
        name={BottomNavigatorTab.EXPENSES}
        component={Expenses}
        options={{header: () => <CustomHeader />}}
      />
      <Tab.Screen
        name={BottomNavigatorTab.SETTINGS}
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
