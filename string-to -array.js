const name = "intocode bootcamp";
const nameLetters = name.split()
console.log(name)
console.log(nameLetters)// ['intocode bootcamp']

const words = name.split(' ')
console.log(words) // ['intocode', 'bootcamp']

console.log(name.slice(-1)) //вывести последнюю букву переменной name
console.log(name.split(' ')[1]) // вывести второе слово переменной name
words.push("Saad")// добавить любое слово в конец массива words
console.log(words)

nameLetters.unshift('t', 'h', 'e', ' ')
console.log(nameLetters)
