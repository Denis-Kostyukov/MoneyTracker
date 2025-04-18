import {StyleSheet} from 'react-native';
import Size from 'shared/lib/size/size.ts';

const getStyles = () =>
  StyleSheet.create({
    baseButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    baseButtonText: {
      fontWeight: 'bold',
    },
    textButton: {},
    containedButton: {
      paddingVertical: 10,
      borderRadius: 50,
    },
    textOnly: {
      textAlign: 'center',
      fontSize: Size.S,
    },
    containedText: {
      fontSize: Size.L,
    },
  });

export default getStyles;
