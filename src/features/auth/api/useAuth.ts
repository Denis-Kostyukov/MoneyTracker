import {useMemo, useState} from 'react';
import {auth, firestore} from 'app/firebase';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useUserStore} from 'shared/store/user-store';
import {
  collection,
  doc,
  runTransaction,
} from '@react-native-firebase/firestore';
import {FirebaseBill, FirebaseCategory} from 'entities/finances';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {setUser} = useUserStore();

  const defaultCategories = useMemo((): FirebaseCategory[] => {
    return [
      {
        type: 'income',
        name: 'Salary',
        color: 'blue',
      },
      {
        type: 'income',
        name: 'Gift',
        color: 'pink',
      },
      {
        type: 'income',
        name: 'Other',
        color: 'green',
      },
      {
        type: 'expenses',
        name: 'Health',
        color: 'red',
      },
      {
        type: 'expenses',
        name: 'Leisure',
        color: 'turquoise',
      },
      {
        type: 'expenses',
        name: 'Other',
        color: 'green',
      },
    ];
  }, []);

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
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await runTransaction(firestore, async transaction => {
        transaction.set(doc(firestore, 'users', user.uid), {});
        const bill: Omit<FirebaseBill, 'name'> = {
          currencyCode: 'USD',
          currencySymbol: '$',
          income: 0,
          expenses: 0,
        };

        transaction.set(
          doc(collection(firestore, 'users', user.uid, 'bills')),
          {
            name: 'Total',
            ...bill,
          },
        );

        transaction.set(
          doc(collection(firestore, 'users', user.uid, 'bills')),
          {
            name: 'Main',
            ...bill,
          },
        );

        defaultCategories.forEach(category => {
          transaction.set(
            doc(collection(firestore, 'users', user.uid, 'categories')),
            category,
          );
        });
      });
    } catch (error: unknown) {
      console.log(error);
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
        categories: [],
        bills: [],
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
