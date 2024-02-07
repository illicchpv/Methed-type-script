type User02 = {
  name: string;
  age: number;
  group: string;
};

type Admin02 = {
  name: string;
  age: number;
  role: "администратор";
}

type Person02 = User02 | Admin02;

const persons02: Person02[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'admin1',
    age: 20,
    role: "администратор",
  },
  {
    name: 'admin2',
    age: 20,
    role: "администратор",
    group: 'Музыкант???',
  },
];

const logPerson02 = (user: Person02) => {
  if('group' in user){
    console.log(`${user.name}, ${user.age}, ${user.group}`);
  }else{
    console.log(`${user.name}, ${user.age}`);

  }
};

persons02.forEach(logPerson02);