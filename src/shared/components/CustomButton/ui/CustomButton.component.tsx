import {FC} from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import getStyles from 'shared/components/CustomButton/ui/CustomButton.styles.ts';
import {useTheme} from 'shared/providers';
import {CustomText} from 'shared/components';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'contained' | 'text';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  variant,
  disabled,
  style,
  textStyle,
  isLoading,
}) => {
  const {theme} = useTheme();
  const styles = getStyles();

  const getButtonStyle = (): StyleProp<ViewStyle> => {
    switch (variant) {
      case 'text':
        return styles.textButton;
      default:
        return [
          styles.containedButton,
          {backgroundColor: theme.buttonBackground},
        ];
    }
  };

  const getTextStyle = (): StyleProp<TextStyle> => {
    switch (variant) {
      case 'text':
        return styles.textOnly;
      default:
        return styles.containedText;
    }
  };

  const getDisabledStyle = (): StyleProp<ViewStyle> => {
    switch (variant) {
      case 'text':
        return {};
      default:
        return {backgroundColor: theme.border};
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.baseButton,
        getButtonStyle(),
        disabled && getDisabledStyle(),
        style,
      ]}
      onPress={() => {
        onPress();
      }}
      activeOpacity={0.6}
      disabled={isLoading || disabled}>
      {isLoading ? (
        <ActivityIndicator size={22} color={theme.text} />
      ) : (
        <CustomText
          style={[getTextStyle(), styles.baseButtonText, textStyle]}
          numberOfLines={1}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
