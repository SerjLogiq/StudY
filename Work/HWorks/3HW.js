var bodyParts = ["leg", "hand", "head", "nose", "finger", "belly", "knee"]
var adjective = ["salty", "beautiful", "scary", "crooked", "dirty", "touchy"]// прилагательное
var animal = ["cat", "dog", "tiger", "giraffe", "mole", "perch"]
var animalBodyPart = ["claw", "tail", "mustache", "gill", "fin"]

var simpleGenerator = ("You are " + animal[Math.floor(Math.random() * animal.length)] + " " +
    animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)])
console.log(simpleGenerator)//first task

var myGenerator = ("Your " + bodyParts[Math.floor(Math.random() * bodyParts.length)] + " more " +
    adjective[Math.floor(Math.random() * adjective.length)] + " than " +
    animal[Math.floor(Math.random() * animal.length)] + " " +
    animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)])
console.log(myGenerator)//second task

var randomBadPhase = ["Your", bodyParts[Math.floor(Math.random() * bodyParts.length)], "more", adjective[Math.floor(Math.random() * adjective.length)],
    "than", animal[Math.floor(Math.random() * animal.length)], animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)]].join(" ")
console.log(randomBadPhase)//third task

var numbersToString = [3, 2, 1].join(" bigger, than ")
console.log(numbersToString)//task four

