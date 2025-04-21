import {StyleSheet} from 'react-native';

const getStyles = (radioButtonColor: string) =>
  StyleSheet.create({
    listContentContainer: {
      gap: 8,
    },
    itemContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    radioButtonWrapper: {
      width: 18,
      height: 18,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: radioButtonColor,
      padding: 3,
    },
    radioButtonInner: {
      flex: 1,
      borderRadius: 14,
      backgroundColor: radioButtonColor,
    },
  });

export default getStyles;
