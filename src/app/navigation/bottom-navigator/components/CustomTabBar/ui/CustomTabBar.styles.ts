import {StyleSheet} from 'react-native';

const getStyles = (backgroundColor: string, borderColor: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      paddingHorizontal: 40,
      borderTopWidth: 1,
      borderTopColor: borderColor,
      backgroundColor: backgroundColor,
    },
    button: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    focusedText: {
      fontWeight: 'bold',
    },
  });

export default getStyles;
