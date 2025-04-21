import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import Timestamp = FirebaseFirestoreTypes.Timestamp;

export interface Bill {
  id: string;
  name: string;
  currencyCode: string;
  currencySymbol: string;
  income: number;
  expenses: number;
}

export interface FirebaseBill extends Omit<Bill, 'id'> {}

export type TransactionType = 'income' | 'expenses';

export interface Category {
  id: string;
  type: TransactionType;
  name: string;
  color: string;
}

export interface FirebaseCategory extends Omit<Category, 'id'> {}

export interface Transaction {
  type: TransactionType;
  billId: string;
  categoryId: string;
  currencyValue: number;
  value: number; // Money amount in USD
  date: Date;
}

export interface FirebaseTransaction extends Omit<Transaction, 'date'> {
  date: Timestamp;
}
