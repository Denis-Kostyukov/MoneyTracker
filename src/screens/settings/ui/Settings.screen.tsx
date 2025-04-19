import {FC} from 'react';
import {View} from 'react-native';
import {CustomButton, CustomText} from 'shared/components';
import {useAuth} from 'features/auth/api';

const Settings: FC = () => {
  const {logOut} = useAuth();

  return (
    <View>
      <CustomText>Settings Component</CustomText>
      <CustomButton title={'Log out'} onPress={logOut} />
    </View>
  );
};

export default Settings;
