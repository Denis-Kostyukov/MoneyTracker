const firebaseErrorCodes = [
  'auth/invalid-credential',
  'auth/email-already-in-use',
  'auth/invalid-email',
  'auth/user-disabled',
] as const;

export type FirebaseErrorCode = (typeof firebaseErrorCodes)[number];

export const FirebaseErrorMessage: {[K in FirebaseErrorCode]: string} = {
  'auth/invalid-credential': 'Wrong email or password',
  'auth/email-already-in-use': 'Email already used',
  'auth/invalid-email': 'Email is not valid',
  'auth/user-disabled': 'User is disabled',
};

export interface FirebaseError {
  code: FirebaseErrorCode;
}

export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof error.code === 'string' &&
    (firebaseErrorCodes as readonly string[]).includes(error.code)
  );
};
