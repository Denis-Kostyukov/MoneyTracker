import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {FC, useCallback} from 'react';
import {
  AppNavigatorParamList,
  AppNavigatorScreens,
  AuthStack,
  BottomNavigator,
  defaultStackConfig,
  StandaloneStack,
} from 'app/navigation';
import {useUserStore} from 'shared/store/user-store';
import {SubscriptionsProvider} from 'shared/providers';
import {Platform} from 'react-native';

const RootStack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator: FC = () => {
  const {user} = useUserStore();

  const bottomNavigator = useCallback(
    () => (
      <SubscriptionsProvider>
        <BottomNavigator />
      </SubscriptionsProvider>
    ),
    [],
  );

  return (
    <RootStack.Navigator screenOptions={defaultStackConfig}>
      {user ? (
        <>
          <RootStack.Screen
            name={AppNavigatorScreens.BOTTOM_NAVIGATION}
            component={bottomNavigator}
          />
          <RootStack.Screen
            name={AppNavigatorScreens.STANDALONE}
            component={StandaloneStack}
            options={
              Platform.OS === 'ios'
                ? {...TransitionPresets.ModalSlideFromBottomIOS}
                : {...TransitionPresets.FadeFromBottomAndroid}
            }
          />
        </>
      ) : (
        <RootStack.Screen
          name={AppNavigatorScreens.AUTH}
          component={AuthStack}
        />
      )}
    </RootStack.Navigator>
  );
};
