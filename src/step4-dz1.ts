// На складе работают люди, нам необходимо создать систему для управления персоналом.
// Должна быть возможность указать сотруднику какой работой ему заниматься (тянуть или толкать)

// У каждого сотрудника своя работа и зарплата

// Мы можем направить сотрудника на другую работу, изменятся обязанности и зарплата.

// 1. Реализуйте класс Job, в него должны входить:
//     - приватные поля role (строка) и salary (число);
//     - геттер поля salary;
//     - публичный метод work, который принимает в качестве аргумента строку personName 
//     - и выводит в консоль: «{personName} сейчас работает как {role}».

// node dist/step4-dz1.js

class Job {
  private role: string = "";
  private _salary: number = 0;

  constructor(role: string = 'главный начальник') {
    this.role = role
  }

  get salary(): number {
    return this._salary;
  }

  work(personName: string): void {
    console.log(`'${personName}' сейчас работает как '${this.role}' на ставке ${this.salary}$/h`);

  }
}

const j0 = new Job('role0');
j0.work('Иванов')

// 2. Реализуйте класс Person, в него должны входить:
//     - приватное поле Job;
//     - приватное поле name, которое может быть передано в аргументе конструктора;
//     - сеттер для поля Job;
//     - метод getSalary, который возвращает текущую зарплату сотрудника;
//     - метод work(), который принуждает выполнить текущую работу по профессии.

class Person {
  private _job: Job | undefined;
  private name: string = 'noname';

  constructor(name?: string){
    if(name) this.name = name;
  }

  set job(val: Job){
    this._job = val
  }

  getSalary(): number {
    if(this._job) return this._job.salary
    return 0
  }

  work(): void {
    if(this._job) this._job.work(this.name)
  }
}

// Для проверки работы приложения

// - Создайте 2-3 экземпляра класса Person, назначьте им имя.
// - Создайте несколько объектов типа Job, задав им название профессии и роль. ???  название профессии
// - Задайте вашим сотрудникам первоначальные профессии и заставьте их немного поработать.
// - Переквалифицируйте работников на другую профессию.

// Person может работать с любым Job, который он получает снаружи.


const p1 = new Person('Person1')
const p2 = new Person('Person2')

const j1 = new Job('role1');
const j2 = new Job('role2');
const j3 = new Job('role3');

p1.job = j1
p1.work()

p2.job = j2
p2.work()

p2.job = j3
p2.work()

// node dist/step4-dz1.js

