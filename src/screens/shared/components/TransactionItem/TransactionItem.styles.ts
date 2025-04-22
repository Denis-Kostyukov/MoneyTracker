import {StyleSheet} from 'react-native';

const getStyles = (bgColor: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      backgroundColor: bgColor,
    },
    categoryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    categoryIcon: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
  });

export default getStyles;
