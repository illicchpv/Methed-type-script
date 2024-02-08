type animal = {
  name: string;
  age: number;
  breed: string;
}
type pet = {
  name: string;
  home: string;
  owner: {
    nameOwner: string;
  }
}

const cat: animal = <animal> {
  name: 'aaaa',
  age: 9,
  breed: 'kot',
  voice: 'meau', // err
} as animal

const myCat : pet = {
  ...cat,
  home: 'ffff',
  owner: {nameOwner: 'ssss'},
}

const aimalToPet =  (animal: animal, home: string, ownerName: string): pet => ({
  name: animal.name,
  home: home,
  owner: {nameOwner: ownerName},
})

const cb = document.querySelector('.cb')

if(cb instanceof HTMLInputElement){
  cb.validationMessage
}

// непонятен смысл : el is HTMLInputElement 👇
const isHTMLInputElement = (el: HTMLInputElement | null): el is HTMLInputElement => {
  if(el instanceof HTMLInputElement){
    return true
  } else {
    return false
  }
} 