const log = <T, B>(val: T, val2: B): T => {
  console.log(val, val2);
  return val
}
log('string', 'string')
log<string, number>('string', 222)
log(111, 222)

function flog<T>(val: T): T {
  console.log(val);
  return val
}
flog('string')
flog<string>('string')
flog(111)

const arr: Array<string> = ['a', 'aw', 'ae', 'ar',]


// ------------

type filterArray = <T>(arr: T[], exclude: T[]) => T[];

const filterArr = <T>(arr: T[], exclude: T[]): T[] =>
  arr.filter((item) => !exclude.includes(item))

const filterArr2: filterArray = (arr, exclude) =>
  arr.filter((item) => !exclude.includes(item))

const res = filterArr<number>([1, 2, 3, 4,], [2, 3,])
console.log('res: ', res);
const res2 = filterArr2<number>([1, 2, 3, 4,], [2, 3,])
console.log('res2: ', res2);

// ------------

type HttpResponse<T> = {
  success: boolean;
  error?: boolean;
  data?: T[];
}

type product = {
  id: number;
  title: string;
  count: number;
};
type person = {
  id: number;
  name: string;
  post: string;
};

const resp: HttpResponse<product> = {
  success: true,
  data: [
    {
      id: 11,
      title: 'string;',
      count: 11,
    },
    {
      id: 12,
      title: 'str aaaa ing;',
      count: 22,
    },
  ],
}

const resp2: HttpResponse<person> = {
  success: true,
  error: false,
  data: [
    {
      id: 11,
      name: 'ivan;',
      post: 'stor',
    },
    {
      id: 12,
      name: 'im gena',
      post: 'na rch',
    },
  ],
}



// node dist/main.js