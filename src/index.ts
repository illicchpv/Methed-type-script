// необязательные значения

const div = (a: number, b: number, round?: true): number => {
  const res = a / b
  if (round) {
    return Math.round(res)
  }
  return res
}

div(15, 4, true)
// div(15, 3, false)
div(15, 3)
div(11, 3)

type Student = {
  firstName: string;
  lastName: string;
  age: number;
  bornCity?: string; // не обязательно
}

// type HttpRes = {
//   status: 'pending' | 'success' | 'filed';
//   data?: [];
//   error?: string;
// }
type HttpResPending = {
  status: 'pending';
}
type HttpResSuccess = {
  status: 'success';
  data: [];
}
type HttpResFiled = {
  status: 'filed';
  error: string;
}
type HttpRes =
  | HttpResPending 
  | HttpResSuccess 
  | HttpResFiled

const fetchData = (res: HttpRes): void => {
  if (res.status === 'pending') {
    // res.error // при статусе pending нельзя обращаться к data и error. контракты! =>
  }
  if (res.status === 'success') {

  }
  if (res.status === 'filed') {

  }
}

