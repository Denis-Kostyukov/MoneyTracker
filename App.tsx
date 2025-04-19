import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'shared/providers';
import {AppBackgroundWrapper} from 'shared/ui';
import {AppNavigator} from 'app/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from 'features/auth/api';
import {auth} from 'app/firebase';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const {getUserInfo} = useAuth();

  useEffect(() => {
    const prepare = () => {
      setIsAppReady(true);
    };
    prepare();
    return auth.onAuthStateChanged(async user => {
      await getUserInfo(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppBackgroundWrapper>
          {isAppReady && <AppNavigator />}
          <Toast />
        </AppBackgroundWrapper>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
