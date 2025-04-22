import {StyleSheet} from 'react-native';

const getStyles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
      gap: 10,
    },
    header: {
      fontSize: 22,
      textAlign: 'center',
    },
    transactionTypeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    transactionTypeSelected: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
    },
    inputContainer: {
      maxWidth: '30%',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: 4,
    },
    bill: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
    },
    categoryContainer: {
      alignItems: 'center',
      gap: 5,
      paddingVertical: 4,
      paddingHorizontal: 6,
    },
    categoryContainerSelected: {
      borderRadius: 4,
    },
    categoryIcon: {
      width: 28,
      height: 28,
      borderRadius: 14,
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
  });

export default getStyles;
