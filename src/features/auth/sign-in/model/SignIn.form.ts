import * as yup from 'yup';

const MIN_LENGTH_PASSWORD = 6;

enum SignInField {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const defaultValuesSignIn = {
  [SignInField.EMAIL]: '',
  [SignInField.PASSWORD]: '',
};

const getSignInScheme = () =>
  yup.object().shape({
    [SignInField.EMAIL]: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    [SignInField.PASSWORD]: yup
      .string()
      .min(
        MIN_LENGTH_PASSWORD,
        `Password must be at least ${MIN_LENGTH_PASSWORD} characters`,
      )
      .required('Password is required'),
  });

export {getSignInScheme, defaultValuesSignIn, SignInField};
