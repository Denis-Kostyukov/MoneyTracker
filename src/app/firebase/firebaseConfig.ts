import {getAuth} from '@react-native-firebase/auth';
import {getFirestore} from '@react-native-firebase/firestore';

const auth = getAuth();
const firestore = getFirestore();

export default {auth, firestore};
