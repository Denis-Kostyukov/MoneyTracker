import {FC} from 'react';
import {View} from 'react-native';
import {CustomButton, CustomInput, ErrorText} from 'shared/components';
import getStyles from 'features/auth/sign-in/ui/SignIn.styles.ts';
import {
  defaultValuesSignIn,
  getSignInScheme,
  SignInField,
} from 'features/auth/sign-in/model/SignIn.form.ts';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const SignIn: FC = () => {
  const scheme = getSignInScheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(scheme),
    mode: 'all',
    defaultValues: defaultValuesSignIn,
  });

  const styles = getStyles();

  return (
    <View style={styles.container}>
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
      <CustomButton title={'Sign in'} onPress={() => {}} />
      <CustomButton
        variant={'text'}
        title={'Do not have an account?'}
        onPress={() => {}}
      />
    </View>
  );
};

export default SignIn;
