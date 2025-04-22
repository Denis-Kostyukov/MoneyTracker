import {FC} from 'react';
import {FlatList, View} from 'react-native';
import {CustomButton, CustomText} from 'shared/components';
import {useSubscriptions} from 'shared/providers';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AppNavigatorParamList,
  AppNavigatorScreens,
  StandaloneStackScreen,
} from 'app/navigation';
import getStyles from 'screens/income/ui/Income.styles.ts';
import {TransactionItem} from 'screens/shared/components';

const Income: FC = () => {
  const {transactions} = useSubscriptions();

  const {navigate} = useNavigation<NavigationProp<AppNavigatorParamList>>();

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <CustomText>Transactions:</CustomText>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
      <CustomButton
        title={'navigate'}
        onPress={() => {
          navigate(AppNavigatorScreens.STANDALONE, {
            screen: StandaloneStackScreen.ADD_TRANSACTION,
          });
        }}
      />
    </View>
  );
};

export default Income;
