import {FC, useEffect, useMemo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BillSelectModal, CustomText} from 'shared/components';
import {useUserStore} from 'shared/store/user-store';
import {useStateStore} from 'shared/store/state-store';
import getStyles from 'app/navigation/bottom-navigator/components/CustomHeader/ui/CustomHeader.styles.ts';
import {useTheme} from 'shared/providers';

const CustomHeader: FC = () => {
  const {user} = useUserStore();
  const {activeBillId, setActiveBillId} = useStateStore();
  const {theme} = useTheme();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedBillIndex, setSelectedBillIndex] = useState<number>(0);

  useEffect(() => {
    if (user && user.bills.length > 0) {
      setActiveBillId(user.bills[0].id);
      setSelectedBillIndex(
        user.bills.findIndex(item => item.id === user.bills[0].id),
      );
    }
  }, [user]);

  const bill = useMemo(() => {
    return user?.bills.find(i => i.id === activeBillId);
  }, [activeBillId]);

  const styles = getStyles(theme.border);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.billContainer}
        onPress={() => setIsModalVisible(true)}>
        <CustomText>{bill?.name} ▼</CustomText>
        <CustomText>
          {Number(bill?.income) - Number(bill?.expenses)} {bill?.currencySymbol}
        </CustomText>
      </TouchableOpacity>
      {user?.bills ? (
        <BillSelectModal
          bills={user.bills}
          isVisible={isModalVisible}
          setIsVisible={setIsModalVisible}
          selectedBillIndex={selectedBillIndex}
          setSelectedBillIndex={setSelectedBillIndex}
          onApply={() => {
            if (user.bills[selectedBillIndex].id !== activeBillId) {
              setActiveBillId(user.bills[selectedBillIndex].id);
            }
          }}
        />
      ) : null}
    </View>
  );
};

export default CustomHeader;
