import {FC, ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {defaultStyles} from 'shared/lib';
import {useTheme} from 'shared/providers';

const AppBackgroundWrapper: FC<{children: ReactNode}> = ({children}) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView
      style={[defaultStyles.flex, {backgroundColor: theme.background}]}>
      <StatusBar barStyle={theme.barStyle} backgroundColor={theme.background} />
      {children}
    </SafeAreaView>
  );
};

export default AppBackgroundWrapper;
