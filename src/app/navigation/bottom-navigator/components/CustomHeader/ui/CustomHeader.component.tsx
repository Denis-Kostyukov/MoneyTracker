import {FC, useEffect, useMemo, useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {CustomButton, CustomText, RadioList} from 'shared/components';
import {useUserStore} from 'shared/store/user-store';
import {useStateStore} from 'shared/store/state-store';
import getStyles from 'app/navigation/bottom-navigator/components/CustomHeader/ui/CustomHeader.styles.ts';
import {useTheme} from 'shared/providers';
import {BlurView} from '@react-native-community/blur';
import {defaultStyles} from 'shared/lib';

const CustomHeader: FC = () => {
  const {user} = useUserStore();
  const {activeBillId, setActiveBillId} = useStateStore();
  const {theme, isDarkTheme} = useTheme();

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

  const styles = getStyles(theme.border, theme.inputBackground);

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
        <Modal transparent visible={isModalVisible} animationType={'slide'}>
          <BlurView
            style={defaultStyles.absoluteFill}
            blurType={isDarkTheme ? 'dark' : 'light'}></BlurView>
          <View style={styles.modalContentContainer}>
            <RadioList
              items={user.bills}
              renderContent={item => (
                <View>
                  <CustomText>{item.name}</CustomText>
                  <CustomText>
                    {item.income - item.expenses} {item.currencySymbol}
                  </CustomText>
                </View>
              )}
              selectedIndex={selectedBillIndex}
              setSelectedIndex={setSelectedBillIndex}
            />
            <CustomButton
              title={'Apply'}
              onPress={() => {
                if (user.bills[selectedBillIndex].id !== activeBillId) {
                  setActiveBillId(user.bills[selectedBillIndex].id);
                }
                setIsModalVisible(false);
              }}
            />
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

export default CustomHeader;
