import {FC} from 'react';
import {CustomText} from 'shared/components';
import {useTheme} from 'shared/providers';
import Size from 'shared/lib/size/size.ts';

interface ErrorTextProps {
  display?: any;
  text?: string;
}

const ErrorText: FC<ErrorTextProps> = ({display, text}) => {
  const {theme} = useTheme();
  return (
    <CustomText
      style={{
        display: display ? 'flex' : 'none',
        fontSize: Size.S,
        color: theme.inputError,
      }}>
      {text}
    </CustomText>
  );
};

export default ErrorText;
