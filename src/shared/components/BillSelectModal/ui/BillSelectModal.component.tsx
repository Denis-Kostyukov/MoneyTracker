import {FC} from 'react';
import {View, Modal} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {defaultStyles} from 'shared/lib';
import {CustomButton, CustomText, RadioList} from 'shared/components';
import {useTheme} from 'shared/providers';
import {Bill} from 'entities/finances';
import getStyles from 'shared/components/BillSelectModal/ui/BillSelectModal.styles.ts';

interface BillSelectModalProps {
  bills: Bill[];
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  selectedBillIndex: number;
  setSelectedBillIndex: (index: number) => void;
  onApply: () => void;
}

const BillSelectModal: FC<BillSelectModalProps> = ({
  bills,
  isVisible,
  setIsVisible,
  selectedBillIndex,
  setSelectedBillIndex,
  onApply,
}) => {
  const {theme, isDarkTheme} = useTheme();

  const styles = getStyles(theme.inputBackground);

  return (
    <Modal transparent visible={isVisible} animationType={'slide'}>
      <BlurView
        style={defaultStyles.absoluteFill}
        blurType={isDarkTheme ? 'dark' : 'light'}></BlurView>
      <View style={styles.modalContentContainer}>
        <RadioList
          items={bills}
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
            onApply();
            setIsVisible(false);
          }}
        />
      </View>
    </Modal>
  );
};

export default BillSelectModal;
