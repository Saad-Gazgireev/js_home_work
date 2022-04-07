// А) Вывести первый элемент массива в консоль
let charecters =['Tirion', 'John', 'mama', 'papa', 'dada']
let firstElement = (charecters[0])
console.log(firstElement)

// В) Вывести пеоследний элемент массива в консоль
let lastElement = charecters.slice(-1)
console.log(lastElement)

// C) Удали из массива charecters первый элемент
charecters.shift()
console.log(charecters)

// D) Добавь значение переменной firstElement в конец массива charecters
charecters.push(firstElement)
console.log(charecters)

// E) Добавь в начало массива charecters значение 'Король ночи'
charecters.unshift('Король ночи')
console.log(charecters)

// F) Удали с помощью delete элемент массива charecters с индексом 5
delete charecters[5]
console.log(charecters)

// G) Добавь в начало массива charecters значение элемента lastElement
charecters.unshift(lastElement)
console.log(charecters)


