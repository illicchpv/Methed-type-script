/*
const translate = (lang: 'ru-RU' | 'en-US', text: string) : string => {
  // перевод

  return text
}

translate('en-US', 'ioiu oiu oiu oiu o')
translate('ru-RU', 'орп орп оп орп опр ')
// translate('us-RE', 'орп орп оп орп опр ') // err

// так неудобно при изменениях
*/


/*
const LOCALE_RU = 'ru-RU' 
const LOCALE_EN = 'en-US'

const translate = (lang: 'ru-RU' | 'en-US', text: string) : string => { // нельзя использовать LOCALE_RU...
  // перевод

  return text
}

translate(LOCALE_EN, 'ioiu oiu oiu oiu o')
translate(LOCALE_RU, 'орп орп оп орп опр ')
// translate('us-RE', 'орп орп оп орп опр ') // err

// так тоже неудобно при изменениях
*/

/*
const LOCALE : {
  RU: 'ru-RU';
  EN: 'en-US';
} = {
  RU: 'ru-RU',
  EN: 'en-US',
}
type locale = typeof LOCALE[keyof typeof LOCALE] // хрен поймёшь
const translate = (lang: locale, text: string) : string => { // нельзя использовать LOCALE_RU...
  // перевод

  return text
}
translate(LOCALE.EN, 'ioiu oiu oiu oiu o')
translate(LOCALE.RU, 'орп орп оп орп опр ')

*/

//самое логичное решение:
enum Locale {
  RU = 'ru-RU',
  EN = 'en-US',
}
const translate = (lang: Locale, text: string) : string => { // нельзя использовать LOCALE_RU...
  // перевод

  return text
}
translate(Locale.EN, 'ioiu oiu oiu oiu o')
translate(Locale.RU, 'орп орп оп орп опр ')
console.log('Locale: ', Locale);

// --------------------------

/*
enum TypeUser {
  admin,
  moderator,
  user,
}
console.log('TypeUser: ', TypeUser);
console.log('TypeUser[1]: ', TypeUser[1]); // moderator
console.log('TypeUser["moderator"]: ', TypeUser["moderator"]); // 1
*/

enum TypeUser {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
}
console.log('TypeUser: ', TypeUser);
console.log('TypeUser["moderator"]: ', TypeUser["moderator"]); // moderator

// --------------------------
enum statusCode {
  SUCCESS = 'success', // более понятно чем коды
  PROCESS = 'process',
  FAILED = 'filed',
}
const res = {
  message: 'успех',
  statusCode: statusCode.SUCCESS,
}

if(res.statusCode === statusCode.SUCCESS){
  // ok
}
