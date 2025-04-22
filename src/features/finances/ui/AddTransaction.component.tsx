import {FC, useMemo, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {
  BillSelectModal,
  CustomButton,
  CustomInput,
  CustomText,
} from 'shared/components';
import {useTheme} from 'shared/providers';
import {defaultStyles} from 'shared/lib';
import {useUserStore} from 'shared/store/user-store';
import {useStateStore} from 'shared/store/state-store';
import {Bill, Category, TransactionType} from 'entities/finances';
import getStyles from 'features/finances/ui/AddTransaction.styles.ts';
import {useNavigation} from '@react-navigation/native';

const AddTransaction: FC = () => {
  const {theme} = useTheme();
  const {user} = useUserStore();
  const {activeBillId} = useStateStore();
  const {goBack} = useNavigation();

  const billsWithoutMain = useMemo(
    () => user?.bills.filter(item => item.name !== 'Total'),
    [user?.bills],
  );

  const getInitialBill = () => {
    return (
      billsWithoutMain!.find(bill => bill.id === activeBillId) ||
      billsWithoutMain![0]
    );
  };

  const [selectedBill, setSelectedBill] = useState<Bill>(getInitialBill());
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionType>('income');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [value, setValue] = useState<string>('0');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedBillIndex, setSelectedBillIndex] = useState<number>(
    billsWithoutMain?.findIndex(item => item.id === selectedBill.id) || 0,
  );

  const styles = getStyles();

  return (
    <View
      style={[
        defaultStyles.flex,
        {backgroundColor: theme.background},
        styles.container,
      ]}>
      <CustomText style={styles.header}>Adding Transaction</CustomText>
      <View style={styles.transactionTypeContainer}>
        <TouchableOpacity onPress={() => setSelectedTransactionType('income')}>
          <CustomText
            style={[
              selectedTransactionType === 'income' &&
                styles.transactionTypeSelected,
            ]}>
            Income
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTransactionType('expenses')}>
          <CustomText
            style={[
              selectedTransactionType === 'expenses' &&
                styles.transactionTypeSelected,
            ]}>
            Expenses
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          style={defaultStyles.centerText}
          keyboardType={'number-pad'}
          value={value}
          onChangeText={setValue}
        />
        <CustomText>{selectedBill.currencyCode}</CustomText>
      </View>
      <CustomText style={styles.sectionHeader}>Bill</CustomText>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <CustomText style={styles.bill}>{selectedBill.name}</CustomText>
      </TouchableOpacity>
      <CustomText style={styles.sectionHeader}>Categories</CustomText>
      <FlatList
        horizontal
        style={defaultStyles.noGrow}
        data={user?.categories.filter(
          item => item.type === selectedTransactionType,
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.categoryContainer,
              item.id === selectedCategory?.id && {
                ...styles.categoryContainerSelected,
                backgroundColor: item.color,
              },
            ]}
            onPress={() => setSelectedCategory(item)}>
            <View
              style={[styles.categoryIcon, {backgroundColor: item.color}]}
            />
            <CustomText
              style={[item.id === selectedCategory?.id && {color: 'white'}]}>
              {item.name}
            </CustomText>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton
          style={defaultStyles.flex}
          title={'Cancel'}
          onPress={goBack}
        />
        <CustomButton
          disabled={
            isNaN(Number(value)) || Number(value) === 0 || !selectedCategory
          }
          style={defaultStyles.flex}
          title={'Apply'}
          onPress={() => {}}
        />
      </View>
      <BillSelectModal
        bills={billsWithoutMain!}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        selectedBillIndex={selectedBillIndex}
        setSelectedBillIndex={setSelectedBillIndex}
        onApply={() => {
          setSelectedBill(billsWithoutMain![selectedBillIndex]);
        }}
      />
    </View>
  );
};

export default AddTransaction;
