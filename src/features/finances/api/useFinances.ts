import {Dispatch, SetStateAction, useState} from 'react';
import {useUserStore} from 'shared/store/user-store';
import {collection, onSnapshot, query} from '@react-native-firebase/firestore';
import {auth, firestore} from 'app/firebase';
import {
  Bill,
  Category,
  FirebaseBill,
  FirebaseCategory,
  FirebaseTransaction,
  Transaction,
} from 'entities/finances';

const useFinances = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {user, setUser} = useUserStore();

  const subscribeOnCategoriesUpdates = () => {
    return onSnapshot(
      query(
        collection(firestore, 'users', auth.currentUser!.uid, 'categories'),
      ),
      snapshot => {
        if (!snapshot) return;
        const categories: Category[] = [];
        snapshot.forEach(categorySnapshot => {
          const data = categorySnapshot.data() as FirebaseCategory;
          categories.push({
            id: categorySnapshot.id,
            ...data,
          });
        });
        setUser({
          ...user!,
          categories: categories,
        });
      },
    );
  };

  const subscribeOnBillsUpdates = () => {
    return onSnapshot(
      query(collection(firestore, 'users', auth.currentUser!.uid, 'bills')),
      snapshot => {
        if (!snapshot) return;
        const bills: Bill[] = [];
        snapshot.forEach(billSnapshot => {
          const data = billSnapshot.data() as FirebaseBill;
          bills.push({
            id: billSnapshot.id,
            ...data,
          });
        });
        setUser({
          ...user!,
          bills,
        });
      },
    );
  };

  const subscribeOnTransactionsUpdates = (
    billId: string,
    setTransactions: Dispatch<SetStateAction<Transaction[]>>,
  ) => {
    return onSnapshot(
      query(
        collection(firestore, 'users', auth.currentUser!.uid, 'transactions'),
      ),
      snapshot => {
        if (!snapshot) return;
        const transactions: Transaction[] = [];
        const isTotal =
          user?.bills.find(item => item.id === billId)?.name === 'Total';
        snapshot.forEach(transactionSnapshot => {
          const data = transactionSnapshot.data() as FirebaseTransaction;
          if (isTotal || data.billId === billId) {
            transactions.push({
              ...data,
              date: data.date.toDate(),
            });
          }
        });
        setTransactions(transactions);
      },
    );
  };

  return {
    isLoading,
    subscribeOnCategoriesUpdates,
    subscribeOnBillsUpdates,
    subscribeOnTransactionsUpdates,
  };
};

export default useFinances;
