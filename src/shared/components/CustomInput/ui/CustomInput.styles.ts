import {StyleSheet} from 'react-native';
import Size from 'shared/lib/size/size.ts';

const getStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    headerText: {
      fontSize: Size.S,
      paddingHorizontal: 10,
    },
    input: {
      borderBottomWidth: 1,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
  });

export default getStyles;
