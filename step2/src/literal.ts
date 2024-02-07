const a = 2;
let b = 2; // 
//  b = '2' // ошибка

let b23: 2 | 3;
b23 = 2;
// b23 = 5; // err

const apiService = (url: string, method: 'GET' | 'POST') =>
  fetch(url, {
    method,
  })

const method = 'POST'  
let method2 = 'POST'  

apiService('https:....', 'GET') // ok
// apiService('https:....', 'PUT') // err 

apiService('https:....', method) // ok
// apiService('https:....', method2) // err


const obj2 = {
  method: 'POST',
}
// apiService('https:....', obj2.method) // err

const obj3: {
  method: 'POST';
} = {
  method: 'POST',
}
apiService('https:....', obj3.method) // OK

// можно так
type httpMethod = 'GET' | 'POST'
const apiService2 = (url: string, method: httpMethod) =>
  fetch(url, {
    method,
  })