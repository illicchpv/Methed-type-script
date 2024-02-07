// >node .\dist\src\TS-Contacts-03.js

export interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

export interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;


export const persons: Person[] = [
  {
    type: 'admin',
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'певец',
  },
  {
    type: 'user',
    name: 'Кир Курилов',
    age: 111,
    group: 'клоун',
  },
  {
    type: 'user',
    name: 'Арат Гуляуддинов',
    age: 26,
    group: 'музыкант',
  }
];