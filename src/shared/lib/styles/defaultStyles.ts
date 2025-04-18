import {StyleSheet} from 'react-native';

const DefaultStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  centerXY: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  centerText: {
    textAlign: 'center',
  },
  maxWidth: {
    width: '100%',
  },
  bold: {
    fontWeight: 'bold',
  },
  noGrow: {
    flexGrow: 0,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default DefaultStyles;
