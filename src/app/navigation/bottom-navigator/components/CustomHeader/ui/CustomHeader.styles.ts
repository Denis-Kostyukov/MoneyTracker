import {StyleSheet} from 'react-native';

const getStyles = (borderColor: string, modalContainerColor: string) =>
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
    modalContentContainer: {
      position: 'absolute',
      top: '50%',
      left: 20,
      right: 20,
      transform: [{translateY: '-50%'}],
      gap: 10,
      padding: 15,
      borderRadius: 10,
      backgroundColor: modalContainerColor,
    },
  });

export default getStyles;
