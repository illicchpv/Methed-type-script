// >node .\dist\src\TS-Contacts-03.js

// Необходимо реализовать вывод роли или группы, 
// для этого необходимо как-то различить данные между собой.
// Для объектов используйте Interface вместо классов 

import {Admin, Person, User, persons} from './infos.js'

const logPerson = (person: Person) => {
  let information: string;
  if (person.type === 'admin') {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);

// ============================
// после того как логику по определению типа вынесли в отдельные функции, 
// снабдив типы дополнительным полем, всё сломалось. Исправьте
// ??? каким полем?

const isAdmin = (person: Person): person is Admin => {
  return person.type === 'admin';
}

const isUser = (person: Person): person is User => {
  return person.type === 'user';
}

const logPerson04 = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

console.log();
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson04);

console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson04);

//  node ..\dist\src\TS-Contacts-03.js