{
  // Создать абстрактный класс Users
  // который сожержит список пользователей userList
  // Пользователь обязательно должен иметь поля
  // id, firstname, surname, age
  // Методы:
  // add добавляет пользователя в список userList 
  // remove удаляет по id из списка userList и возвращает булево значение true если пользователь был удален и false если пользователь не был найден
  // get возвращает пользователя по id или null если пользователь не был найден
  // abstract User
  abstract class User {
    id: string; // = User.rndId;
    firstName: string;
    age: number;

    constructor(id: string, firstName: string, age: number) {
      this.id = id;
      this.firstName = firstName
      this.age = age
    }

    // static get rndId(): string { return Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9) }
  }

  // создать два класса наследуя Users
  // Students и Employees
  // у студентов обязательные поля
  // year: номер курса 
  // specialty: специальность
  // у сотрудников
  // post: должность
  // Student 
  class Student extends User{
    year: number;
    specialty: string;

    constructor(id: string, firstName: string, age: number, year: number, specialty: string){
      super(id, firstName, age)
      this.year = year
      this.specialty = specialty
    }
  }
  // Employee
  class Employee extends User{
    post: string;

    constructor(id: string, firstName: string, age: number, post: string){
      super(id, firstName, age)
      this.post = post
    }
  }
  // 
  enum SortType{
    asc,
    desc,
  }
  // Методы:
  // add добавляет пользователя в список userList 
  // remove удаляет по id из списка userList и возвращает булево значение true если пользователь был удален и false если пользователь не был найден
  // get возвращает пользователя по id или null если пользователь не был найден
  // Users
  class Users {
    userList: User[];

    constructor() {
      this.userList = [];
    }

    add(user: User): void {
      this.userList.push(user)
    }

    remove(id: string): boolean {
      const uInd = this.userList.findIndex(el => el.id === id)
      console.log('remove uInd: ', uInd);
      if(uInd < 0 ) return false;
      this.userList.splice(uInd, 1);
      return true
    }

    get(id: string): User | null{
      const u = this.userList.find(el => el.id === id)
      return u ?? null
    }

    // Добавьте метод sorted который возвращает отсортированный список userList
    // Метод принимает один параметр, тип сортировки, по возрастанию или по убыванию, по умолчанию значение по возрастанию
    sorted(sortType:SortType){
      if(sortType === SortType.asc){
        return this.userList.sort((el1,el2) => el1.age >= el2.age ? 1 : -1)
      }else{
        return this.userList.sort((el1,el2) => el1.age >= el2.age ? -1 : 1)
      }
    }

    list(): void {
      console.log('list ----------------- ');
      this.userList.forEach(el => console.log(el))
    }
  }

  const esArr: (Student | Employee)[] = [
    new Employee('1222', 'Employee aaa', 31, 'post1'),
    new Employee('1333', 'Employee bbbb', 32, 'post2'),
    new Student('2111', 'Student aaaaa', 21, 1, 'spec1'),
    new Student('2222', 'Student bbbbb', 22, 2, 'spec2'),
    new Student('2333', 'Student ccccc', 23, 3, 'spec1'),
  ]

  const u = new Users()
  esArr.forEach(el => u.add(el))
  u.list()

  u.remove('222')
  u.remove('2111')

  u.list()

  {
    console.log('SortType.asc----------------');
    const sl = u.sorted(SortType.asc)
    sl.forEach(el => {
      console.log('el: ', el.firstName, el.age);
    })
  }

  {
    console.log('SortType.desc----------------');
    const sl = u.sorted(SortType.desc)
    sl.forEach(el => {
      console.log('el: ', el.firstName, el.age);
    })
  }
}
//  node dist/dz12.js
