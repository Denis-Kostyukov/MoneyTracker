import {FC, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {CustomText} from 'shared/components';
import {useUserStore} from 'shared/store/user-store';
import {useSubscriptions} from 'shared/providers';
import {auth} from 'app/firebase';

const Income: FC = () => {
  const {user} = useUserStore();
  const {transactions, setActiveBillId} = useSubscriptions();

  useEffect(() => {
    if (user && user.bills.length > 0) {
      console.log(
        auth.currentUser?.uid,
        user.bills[0].id,
        user.categories[0].id,
      );
      setActiveBillId(user.bills[0].id);
    }
  }, [user]);

  return (
    <View>
      <CustomText>Categories</CustomText>
      <FlatList
        data={user?.categories}
        renderItem={({item}) => (
          <View style={{backgroundColor: item.color}}>
            <CustomText>{item.name}</CustomText>
          </View>
        )}
      />
      <CustomText>Bills</CustomText>
      <FlatList
        data={user?.bills}
        renderItem={({item}) => (
          <View>
            <CustomText>{item.name}</CustomText>
          </View>
        )}
      />
      <FlatList
        data={user?.bills}
        renderItem={({item}) => (
          <View>
            <CustomText>{item.name}</CustomText>
          </View>
        )}
      />
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
