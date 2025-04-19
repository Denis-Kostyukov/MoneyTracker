import {useState} from 'react';
import {auth} from 'app/firebase';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useUserStore} from 'shared/store/user-store';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {setUser} = useUserStore();

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error: unknown) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error: unknown) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setIsLoading(true);
      await auth.signOut();
    } catch (error: unknown) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getUserInfo = async (user: FirebaseAuthTypes.User | null) => {
    try {
      setIsLoading(true);

      if (!user) {
        setUser(null);
        return;
      }

      setUser({
        email: user.email!,
        name: user.displayName || user.email!,
      });
    } catch (error: unknown) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading, getUserInfo, signIn, signUp, logOut};
};

export default useAuth;
