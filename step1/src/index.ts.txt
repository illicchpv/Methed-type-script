import {calcTotalPrice2} from './modules/calc'
import {product} from './modules/product'

const title: string = 'квадрокоптер'
const price: number = 5_000
const count: number = 50
const arrived: boolean = false

const rez2: string = calcTotalPrice2(product)
console.log('totalPrice: ', rez2);
// --------------------------------

const calcTotalPrice = (title: string, price: number, count: number): string => {
  const totalPrice: number = price * count
  return `${title}: ${totalPrice}`
}
const rez: string = calcTotalPrice(title, price, count)
console.log('totalPrice: ', rez);
// --------------------------------

const city: string[] = ['dhgfd', 'kjhsdsd', '7iuqwy'];
const counter: number[] = [25, 32, 11, 33, 333]
const array: (number | boolean | string)[] = [15, true, 'react']
const arrayKORTEJ: [number, boolean, string] = [15, true, 'react']
const arrayObj: {
  name: string;
  age: number;
}[] = [{name:'taatat', age: 35}, {name:'ddddd', age: 44}]

// --------------------
const arrRead: readonly number[] = [25, 32, 11, 33, 333]

