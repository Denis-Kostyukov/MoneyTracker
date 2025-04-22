import {FC, useMemo} from 'react';
import {View} from 'react-native';
import getStyles from 'screens/shared/components/TransactionItem/TransactionItem.styles.ts';
import {Transaction} from 'entities/finances';
import {useUserStore} from 'shared/store/user-store';
import {CustomText} from 'shared/components';
import {useTheme} from 'shared/providers';
import {useStateStore} from 'shared/store/state-store';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: FC<TransactionItemProps> = ({transaction}) => {
  const {user} = useUserStore();
  const {theme} = useTheme();
  const {activeBillId} = useStateStore();

  const transactionCategory = useMemo(
    () =>
      user?.categories.find(category => category.id === transaction.categoryId),
    [transaction, user?.categories],
  );

  const activeBill = useMemo(
    () => user?.bills.find(item => item.id === activeBillId),
    [activeBillId, user?.bills],
  );

  const styles = getStyles(theme.buttonBackground);

  if (!transactionCategory || !activeBill) return null;

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <View
          style={[
            styles.categoryIcon,
            {backgroundColor: transactionCategory.color},
          ]}
        />
        <CustomText>{transactionCategory.name}</CustomText>
      </View>
      <CustomText>
        {transaction.value} {activeBill.currencySymbol}
      </CustomText>
    </View>
  );
};

export default TransactionItem;
