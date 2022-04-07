let doughtersName = [];
doughtersName.push('Salima')
console.log(doughtersName)

let sunName = []
sunName.push('Ibrahim', 'Abdurrohim')
console.log(sunName[1]) // ['Abdurrohim]

let boolean = [true, false]
boolean.unshift(null)
console.log(boolean)

let arrays = [[],[]]
arrays[1].push(true, true, true)
console.log(arrays)

let arrayHtml = ["html", "css"]
arrayHtml.unshift("git")
arrayHtml.push("javascript")
console.log(arrayHtml)

arrayHtml[4]=('figma')
console.log(arrayHtml)

let stack = ["html", "css", "bem", "js"];
// A) Добавь в конец массива значение "react" (используй .push())
stack.push("react")

// В) Выведи весь массив в консоль
console.log(stack)

// С) Добавь в конце массива значение "redux"
stack[5]=("redux")

// D) Выведи весь массив в консоль
console.log(stack)

// E) Добавь в начале массива значение 'git'
stack[0]=('git')

// F) Выведи весь массив в консоль
console.log(stack)

/* G) Выведи в консоль строку "Сначала мы изуим git, а в конце изучим redux"
Слова  git и redux должны браться из массива.*/
console.log(`"Сначала мы изуим ${stack[0]}, а в конце изучим ${stack[5]}"`)

// H) Добавь в конец массива сразу 2 элемента "mysql" и "mongodb"
stack.push("mysql", "mongodb")
console.log(stack)

// I) Выведи в консоль длину массива
console.log(stack.length)