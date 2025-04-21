import {Bill, Category} from 'entities/finances';

interface User {
  email: string;
  name: string;
  bills: Bill[];
  categories: Category[];
}

export default User;
