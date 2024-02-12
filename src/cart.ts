const getCountGoods = <T extends {title:string, count: number}>(arr: T[], title: string): number => {
  const goods = arr.find(item => item.title === title)
  return goods?.count ?? 0
}

interface Goods {
  title: string;
  count: number;
  price?: number
}

const getCountGoods2 = <T extends Goods>(arr: T[], title: string): number => {
  const goods = arr.find(item => item.title === title)
  return goods?.count ?? 0
}

const goods: Goods[] = [
  {title: 'aaa', count: 11,},
  {title: 'bbb', count: 22,},
  {title: 'ccc', count: 33,},
  {title: 'ddd', count: 44,},
]

console.log(getCountGoods(goods, 'aaa'));
console.log(getCountGoods2(goods, 'aaa'));

// ----

abstract class Cart<T extends Goods>{
  protected goods: T[] = [];
  
  public add(item: T): void {
    this.goods.push(item)
  }

  public get(title: string): T | null{
    return this.goods.find(item => item.title === title) ?? null
  }

  public get totalPrice() : number{
    return this.goods.reduce((sum, el) => {
      return sum += el.price ? el.price + el.count : 0;
    }, 0)
  }
}

interface TechGoods {
  title: string;
  count: number;
  price?: number
  type: string;
  description: string;
}

class TechCarts extends Cart<TechGoods> {
}

const techCart = new TechCarts()

techCart.add({
  title: 'aaa',
  count: 1,
  price: 111,
  type: 'string;',
  description: 'string;',
})
techCart.add({
  title: 'bbb',
  count: 11,
  price: 1111,
  type: 'string;1',
  description: 'string;2',
})
techCart.add({
  title: 'ddd',
  count: 12,
  price: 1121,
  type: 'string;22',
  description: 'string;33',
})

console.log('total:', techCart.totalPrice);

console.log('bbb:', techCart.get('bbb'));

// node dist/cart.js