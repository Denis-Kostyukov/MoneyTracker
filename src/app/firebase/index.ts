import firebase from 'app/firebase/firebaseConfig.ts';
import {
  FirebaseErrorMessage,
  FirebaseErrorCode,
  FirebaseError,
  isFirebaseError,
} from 'app/firebase/firebaseErrors.ts';

const {auth, firestore} = firebase;

export type {FirebaseErrorCode, FirebaseError};
export {auth, firestore, FirebaseErrorMessage, isFirebaseError};
