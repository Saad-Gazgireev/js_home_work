let letters = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p']
console.log(letters)
letters.push('t')// Добавь в конец массива letters символ "t" с помощью метода 
console.log(letters.join('')) // выведи в консоль этот массив в виде одного слова
console.log(letters.join('-'))// выведи в консоль этот массив так что-бы после каждой буквы было тире

const words = ['html', 'css']
console.log(words)

console.log(words.join(' & ')) // выведи в браузер  строку 'html & css' 

words.push('git') // добавь в массив эллемент 'git'
console.log(words)

console.log(words.join(' - '))// выведи в консоль 'html - css - git' 

