import React from 'react';
import {
  Text,
} from 'react-native';
import {ThemeProvider} from 'shared/providers';
import {AppBackgroundWrapper} from 'shared/ui';
import {AppNavigator} from 'app/navigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppBackgroundWrapper>
          <AppNavigator/>
        </AppBackgroundWrapper>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
