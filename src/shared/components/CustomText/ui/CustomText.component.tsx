import {FC, ReactNode} from 'react';
import {Text, TextProps, StyleProp, TextStyle} from 'react-native';
import {useTheme} from 'shared/providers';

interface CustomTextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const CustomText: FC<CustomTextProps> = ({children, style, ...props}) => {
  const {theme} = useTheme();

  return (
    <Text style={[{color: theme.text}, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
