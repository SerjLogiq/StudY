//#1. Прекрасные животные
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное"
}
console.log(animals)
//#2. Генератор случайных строк
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
var randomString = ""
while (randomString.length < 10) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomString)
//#3. h4ck3r sp34k

var input = "javascript is awesome";
var output = "";
for (i = 0; i < input.length; i++) {
    let x = input[i].toLowerCase()
    if (x === "a") {
        x = "4"
        output += x
    } else if (x === "e") {
        x = "3"
        output += x
    } else if (x === "i") {
        x = "1"
        output += x
    } else if (x === "o") {
        x = "0"
        output += x
    } else {
        output += x
    }

}
console.log(output)
