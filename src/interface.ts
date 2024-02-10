interface Goods {
  readonly title: string;
  count: number;
  price: number;
}

interface Identify {
  id: string;
  // static get rndId(): string {
  //   return Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9)
  // }
}

class TV implements Goods, Identify {
  readonly title: string;
  count: number;
  price: number;

  readonly id: string = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);

  #summ?: number

  constructor(title: string, price: number, count: number = 0){
    this.title = title
    this.count = count
    this.price = price

    this.#summ  = this.count * this.price
    console.log('this.#summ: ', this.#summ);
  }
}

const tv = new TV('rubin', 1000, 2)
console.log('tv: ', tv);

// node dist/interface.js