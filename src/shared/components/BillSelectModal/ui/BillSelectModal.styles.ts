import {StyleSheet} from 'react-native';

const getStyles = (modalContainerColor: string) =>
  StyleSheet.create({
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
