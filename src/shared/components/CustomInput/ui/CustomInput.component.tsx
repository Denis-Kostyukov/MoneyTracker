import {FC} from 'react';
import {
  View,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInput,
} from 'react-native';
import getStyles from 'shared/components/CustomInput/ui/CustomInput.styles.ts';
import {useTheme} from 'shared/providers';
import {CustomText} from 'shared/components';

interface CustomInputProps extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isError?: boolean;
  headerText?: string;
  headerTextStyle?: StyleProp<TextStyle>;
}

const CustomInput: FC<CustomInputProps> = ({
  style,
  containerStyle,
  isError,
  headerText,
  headerTextStyle,
  ...props
}) => {
  const {theme} = useTheme();
  const styles = getStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      {headerText && (
        <CustomText style={[styles.headerText, headerTextStyle]}>
          {headerText}
        </CustomText>
      )}
      <TextInput
        style={[
          styles.input,
          {borderBottomColor: theme.border, color: theme.inputText},
          style,
          isError && {borderBottomColor: theme.inputError},
        ]}
        placeholderTextColor={theme.border}
        {...props}
      />
    </View>
  );
};

export default CustomInput;
