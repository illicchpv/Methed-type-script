type User01 = {
  name: string;
  age: number;
  group: string;
};

const persons01: User01[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  }
];

const logPerson01 = (user: User01) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons01.forEach(logPerson01);