import {StyleSheet} from 'react-native';

const getStyles = (borderColor: string) =>
  StyleSheet.create({
    container: {
      height: 70,
      borderBottomWidth: 1,
      borderBottomColor: borderColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    billContainer: {
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
    },
  });

export default getStyles;
