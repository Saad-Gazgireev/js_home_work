/* Значение, переданное первым параметром, при необходимости преобразуется в логическое значение. Если значение опущено или равно 0, -0, null, false, NaN, undefined или пустой строке (""), объект имеет начальное значение, равное false. Все остальные значения, включая любые объекты или строку "false", создают объект с начальным значением, равным true. Не путайте примитивные значения true и false логического типа со значениями true и false объекта Boolean.*/

let namer = 'saad';
let name2 = 2;
console.log(namer === name2)

const name1 = 'saad';
const name3 = 2;
console.log(name1 === name3)

const iAmAStudent = false
const isSpring = true
const jsIsBeauty = false
const constCanBeChanged = false
const letCanBeChanged = true
const nullsADataType = false 
const nullsAValue = true
const iAmFromGrozny= false