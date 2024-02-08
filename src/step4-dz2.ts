// Разработайте базовый класс Product, описывающий товар.

// Поля:
// - название товара;
// - цена в рублях.

// Методы:
// - геттеры/сеттеры для полей;

class Product {
  _name: string = 'noname';
  _price: number = 0;

  get name(): string {
    return this._name
  }
  set name(val: string) {
    this._name = val;
  }

  get price(): number {
    return this._price
  }
  set price(val: number) {
    this._price = val;
  }
}

// часть 2
// Разработайте абстрактный базовый класс AbstractSelling, описывающий продажу товара.

// Поля:
// - товар Product;
// - количество единиц товара.

// Методы:
// - геттеры/сеттеры для полей;
// - getPrice() — стоимость покупки, абстрактный метод;
// - compare(AbstractSelling) — сравнивает покупки по убыванию стоимости.
// метод принимает один объект продукта и сравнивает его с ценой текущего товара

abstract class AbstractSelling {
  _product: Product | undefined;
  _productCount: number = 0;

  get product(): Product | undefined {
    return this._product
  }
  set product(val: Product) {
    this._product = val;
  }

  get productCount(): number {
    return this._productCount
  }
  set productCount(val: number) {
    this._productCount = val;
  }

  abstract getPrice(): number;
  // abstract compare(other: AbstractSelling): number;
  compare(other: AbstractSelling): number {
    const s1 = this.getPrice();
    const s2 = other.getPrice();
    return s2 - s1
  }
}

// 1. Реализуйте первый производный класс от AbstractSelling, в котором продажа товара осуществляется
// с точной скидкой от цены товара размер скидки 10$. Переопределите нужные методы.

class Selling1 extends AbstractSelling {
  // _product: Product | undefined;
  // _productCount: number = 0;

  discount: number = 10;

  constructor() {
    super()
  }

  get product(): Product | undefined {
    return this._product
  }
  set product(val: Product) {
    this._product = val;
  }

  get productCount(): number {
    return this._productCount
  }
  set productCount(val: number) {
    this._productCount = val;
  }

  getPrice(): number {
    if (this.product && this.productCount) return +((this.product.price - this.discount) * this.productCount).toFixed(2)
    return 0;
  }
}

const pr1 = new Product()
pr1.name = 'product1'
pr1.price = 110

const s1 = new Selling1()
s1.product = pr1
s1.productCount = 5
// const s1Price = s1.getPrice()
// console.log('s1Price: ', s1Price);


// node dist/step4-dz2.js


// 2. Реализуйте второй производный класс от AbstractSelling, который дополнительно к полям,
// product и количество товаров, принимает количество товаров для скидки.
// В getPrice, если количество единиц товара равно количеству товаров для скидки или больше то применяется скидка 10%.
// Переопределите нужные методы.

class Selling2 extends AbstractSelling {
  // _product: Product | undefined;
  // _productCount: number = 0;

  discount: number = 10;
  discountCnt: number = 0;

  constructor() {
    super()
  }

  get product(): Product | undefined {
    return this._product
  }
  set product(val: Product) {
    this._product = val;
  }

  get productCount(): number {
    return this._productCount
  }
  set productCount(val: number) {
    this._productCount = val;
  }

  getPrice(): number {
    if (this.discountCnt) {
      if (this.product && this.productCount) {
        if (this.productCount >= this.discountCnt) {
          const s = this.product.price * this.productCount
          return +(s - s / 10).toFixed(2);
        } else {
          return +(this.product.price * this.productCount - this.discount).toFixed(2)
        }
      }
    } else {
      if (this.product && this.productCount) return +((this.product.price - this.discount) * this.productCount).toFixed(2)
    }

    return 0;
  }
}


const pr100 = new Product()
pr100.name = 'product100'
pr100.price = 100


// - Примеры расчёта стоимости в подклассах:
//     - Скидка в цене — 10$, цена — 100$, количество — 3; тогда стоимость = (100 − 10) * 3 = 270.
//     - Процент скидки —10%, цена — 100$, количество — 5, 
//        количество, которое надо превысить — 3. Так как 5 ≥ 3, стоимость = 100 * 5 * (1 - 10 / 100) = 450
//     - Обязательно округляем до 2-х знаков после запятой

const s11 = new Selling1()
s11.product = pr100
s11.productCount = 3
console.log('тестовое значение s11 Price: ', s11.getPrice());

const s21 = new Selling2()
s21.product = pr100
s21.productCount = 5
s21.discountCnt = 3
console.log('тестовое значение s21 Price: ', s21.getPrice());

const pr101 = new Product()
pr101.name = 'product101'
pr101.price = 101


// Для проверки работы приложения:
// - Создайте массив из 8 объектов (по 4 для каждого производного класса).
// - Отсортируйте объекты по убыванию с использованием метода Array.sort(AbstractPurchase.compare).
// - Выведите объекты в консоль.

const s_11 = new Selling1()
s_11.product = pr100
s_11.productCount = 11

const s_12 = new Selling1()
s_12.product = pr101
s_12.productCount = 112

const s_13 = new Selling1()
s_13.product = pr101
s_13.productCount = 31

const s_14 = new Selling1()
s_14.product = pr100
s_14.productCount = 124


const s_21 = new Selling2()
s_21.product = pr100
s_21.productCount = 111

const s_22 = new Selling2()
s_22.product = pr101
s_22.productCount = 22

const s_23 = new Selling2()
s_23.product = pr101
s_23.productCount = 43

const s_24 = new Selling2()
s_24.product = pr100
s_24.productCount = 24

let sArray: (Selling1 | Selling2)[] = [];
sArray.push(s_11, s_12, s_13, s_14)
sArray.push(s_21, s_22, s_23, s_24)

console.log('исходный массив:');
sArray.forEach(el => {
  console.log(el.product?.name, 'count:', el.productCount, 'getPrice:', el.getPrice());
})

console.log('сортированный по getPrice массив:');
sArray = sArray.sort((el1, el2) => {
  const r = el1.compare(el2)
  return r
})
sArray.forEach(el => {
  console.log(el.product?.name, 'count:', el.productCount, 'getPrice:', el.getPrice());
})