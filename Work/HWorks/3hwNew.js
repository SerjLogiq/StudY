var randomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)]
}
var bodyParts = ["leg", "hand", "head", "nose", "finger", "belly", "knee"];
var adjective = ["salty", "beautiful", "scary", "crooked", "dirty", "touchy"];// прилагательное
var animal = ["cat", "dog", "tiger", "giraffe", "mole", "perch"];
var animalBodyPart = ["claw", "tail", "mustache", "gill", "fin", "chin"];
var randomPhrase = function () {
    var myGenerator = ("Your " + randomWord(bodyParts) + " more " +
        randomWord(adjective) + " than " +
        randomWord(animal) + " " +
        randomWord(animalBodyPart))
    return myGenerator
}
console.log(randomPhrase())
console.log("Serega  - " + randomPhrase())

function pointsReward(number) {
    if (number < 10) {
        return "Low reward"
    } else if (number >= 10 && number < 20) {
        return "Middle reward"
    } else {
        return "Gold reward"
    }
}

console.log(pointsReward(4))
console.log(pointsReward(10))
console.log(pointsReward(19))
console.log(pointsReward(20))
console.log(pointsReward(200))
