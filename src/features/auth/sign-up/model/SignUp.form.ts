import * as yup from 'yup';

const MIN_LENGTH_PASSWORD = 6;

interface AllSignUpFields {
  email: string;
  password: string;
  'repeat-password'?: string;
}

enum SignUpField {
  EMAIL = 'email',
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeat-password',
}

const defaultValuesSignUp = {
  [SignUpField.EMAIL]: '',
  [SignUpField.PASSWORD]: '',
  [SignUpField.REPEAT_PASSWORD]: '',
};

const getSignUpScheme = () =>
  yup.object().shape({
    [SignUpField.EMAIL]: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    [SignUpField.PASSWORD]: yup
      .string()
      .min(
        MIN_LENGTH_PASSWORD,
        `Password must be at least ${MIN_LENGTH_PASSWORD} characters`,
      )
      .required('Password is required'),
    [SignUpField.REPEAT_PASSWORD]: yup
      .string()
      .oneOf([yup.ref(SignUpField.PASSWORD)], 'Passwords must match'),
  });

export type {AllSignUpFields};

export {getSignUpScheme, defaultValuesSignUp, SignUpField};
