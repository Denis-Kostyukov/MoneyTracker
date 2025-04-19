import {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParamList, BottomNavigatorTab} from 'app/navigation';
import {Settings} from 'screens/settings';
import {CustomTabBar} from 'app/navigation/bottom-navigator/components/CustomTabBar';
import {useTheme} from 'shared/providers';
import {Income} from 'screens/income';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

const BottomNavigator: FC = () => {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar theme={theme} {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Tab.Screen name={BottomNavigatorTab.INCOME} component={Income} />
      <Tab.Screen name={BottomNavigatorTab.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
