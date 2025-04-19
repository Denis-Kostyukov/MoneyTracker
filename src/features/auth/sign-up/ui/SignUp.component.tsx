import {FC} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import getStyles from 'features/auth/sign-up/ui/SignUp.styles.ts';
import {
  AllSignUpFields,
  defaultValuesSignUp,
  getSignUpScheme,
  SignUpField,
} from 'features/auth/sign-up/model/SignUp.form.ts';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {CustomButton, CustomInput, ErrorText} from 'shared/components';
import {AuthStackParamList, AuthStackScreen} from 'app/navigation';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FirebaseErrorMessage, isFirebaseError} from 'app/firebase';
import Toast from 'react-native-toast-message';
import {useAuth} from 'features/auth/api';

const SignUp: FC = () => {
  const scheme = getSignUpScheme();
  const {navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const {isLoading, signUp} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(scheme),
    mode: 'all',
    defaultValues: defaultValuesSignUp,
  });

  const onSubmit = async ({email, password}: AllSignUpFields) => {
    try {
      await signUp(email, password);
    } catch (error: unknown) {
      if (isFirebaseError(error)) {
        Toast.show({
          type: 'error',
          text1: FirebaseErrorMessage[error.code],
        });
      }
    }
  };

  const styles = getStyles();

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <View>
        <Controller
          control={control}
          name={SignUpField.EMAIL}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              isError={!!errors[SignUpField.EMAIL]}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize={'none'}
            />
          )}
        />
        <ErrorText
          display={errors[SignUpField.EMAIL]}
          text={errors[SignUpField.EMAIL]?.message}
        />
      </View>

      <View>
        <Controller
          control={control}
          name={SignUpField.PASSWORD}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <CustomInput
                isError={!!errors[SignUpField.PASSWORD]}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                autoCapitalize={'none'}
              />
            </View>
          )}
        />
        <ErrorText
          display={errors[SignUpField.PASSWORD]}
          text={errors[SignUpField.PASSWORD]?.message}
        />
      </View>

      <View>
        <Controller
          control={control}
          name={SignUpField.REPEAT_PASSWORD}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <CustomInput
                isError={!!errors[SignUpField.REPEAT_PASSWORD]}
                placeholder="Repeat password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                autoCapitalize={'none'}
              />
            </View>
          )}
        />
        <ErrorText
          display={errors[SignUpField.REPEAT_PASSWORD]}
          text={errors[SignUpField.REPEAT_PASSWORD]?.message}
        />
      </View>
      <CustomButton
        title={'Sign up'}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
      <CustomButton
        variant={'text'}
        title={'Already have an account?'}
        onPress={() => {
          navigate(AuthStackScreen.SIGN_IN);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default SignUp;
