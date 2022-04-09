let charecters = ["Ramon", "Jacob", "John", "Tuhan", "Aslan", "Kureysh", "Vandam"]
console.log(charecters)

const king = "Король ночи"
const stupid = "Бран Старк"

charecters[0] = king
console.log(charecters)

charecters[1] = null
console.log(charecters)

charecters[2] = 'Станис Король'
console.log(charecters)

charecters[3] = stupid
console.log(charecters)

charecters[4] = ["seaeon", "01"]
console.log(charecters)

charecters[5] = (`${king}, ${stupid}`)
console.log(charecters)

charecters[6] = (charecters[0])
console.log(charecters)
