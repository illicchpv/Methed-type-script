// юнион 
let count: number | undefined;
count = 1;

let obj: {} | null = null;
obj = {
  name: "test",
  age: 22,
}

const logger = (id: string | number): void => { // юнион 
  // сужение типов
  if (typeof id === "string") {
    // id.length
  }
  if (typeof id === "number") {
    // id.toFixed
  }
  // return false // error : void
  return undefined // ok
  // return void // ok
}

function fLogger(id: string | number): void {
}

const loggerObj = (obj: { a: number } | { b: number }) => { // юнион 
  // console.log(obj.a) // error
  // сужение типов
  if ('a' in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}

const loggerErr = (err: string[] | string | Error) => { // юнион 
  if (Array.isArray(err)) { // сужение типов
    console.log(err.length)
  }
  else if (err instanceof Error) { // сужение типов
    console.log(err.message)
  }
  else {
    console.log(err.split('/'))
  }
}

const loggerErr2 = (err: string): never => { // юнион 
  throw new Error(err) // прерывает выполнение. возврата нет вообще - : never
  // return void // error
}

const hole1: null = null;

const hole2: undefined = undefined;
const hole3: void = undefined;
// const hole4: undefined = void; // ??? почему ошибка
