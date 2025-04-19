import {FC} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {CustomButton, CustomInput, ErrorText} from 'shared/components';
import getStyles from 'features/auth/sign-in/ui/SignIn.styles.ts';
import {
  AllSignInFields,
  defaultValuesSignIn,
  getSignInScheme,
  SignInField,
} from 'features/auth/sign-in/model/SignIn.form.ts';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList, AuthStackScreen} from 'app/navigation';
import {useAuth} from 'features/auth/api';
import {FirebaseErrorMessage, isFirebaseError} from 'app/firebase';
import Toast from 'react-native-toast-message';

const SignIn: FC = () => {
  const scheme = getSignInScheme();
  const {navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const {isLoading, signIn} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(scheme),
    mode: 'all',
    defaultValues: defaultValuesSignIn,
  });

  const onSubmit = async ({email, password}: AllSignInFields) => {
    try {
      await signIn(email, password);
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
          name={SignInField.EMAIL}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              isError={!!errors[SignInField.EMAIL]}
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
          display={errors[SignInField.EMAIL]}
          text={errors[SignInField.EMAIL]?.message}
        />
      </View>
      <View>
        <Controller
          control={control}
          name={SignInField.PASSWORD}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <CustomInput
                isError={!!errors[SignInField.PASSWORD]}
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
          display={errors[SignInField.PASSWORD]}
          text={errors[SignInField.PASSWORD]?.message}
        />
      </View>
      <CustomButton
        title={'Sign in'}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
      <CustomButton
        variant={'text'}
        title={'Do not have an account?'}
        onPress={() => {
          navigate(AuthStackScreen.SIGN_UP);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
