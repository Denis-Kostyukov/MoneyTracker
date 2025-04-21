import {FC} from 'react';
import {FlatList, View} from 'react-native';
import {CustomText} from 'shared/components';
import {useSubscriptions} from 'shared/providers';

const Income: FC = () => {
  const {transactions} = useSubscriptions();

  return (
    <View>
      <CustomText>Transactions:</CustomText>
      <FlatList
        data={transactions}
        renderItem={({item}) => (
          <View>
            <CustomText>{item.value}</CustomText>
          </View>
        )}
      />
    </View>
  );
};

export default Income;
