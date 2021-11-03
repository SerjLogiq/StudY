var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "тираннозавр",
    "велоцираптор",
    "стегозавр",
    "трицератопс",
    "брахиозавр",
    "птеранодон",
    "апатозавр",
    "диплодок",
    "компсогнат"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var attempts = 0
while (remainingLetters > 0 && attempts <= 15) {
    attempts++
    console.log(attempts)
    alert("Слово: " + answerArray.join(" "));
    attemptsCount = 16 - attempts
    var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры. Осталось " + attemptsCount + " попыток").toLowerCase();
    if (guess === null) {

        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {

        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

}
var result = answerArray.join("")
if (result === word) {
    alert("Отлично! Было загадано слово " + word);
} else if (attempts >= 15) {
    alert("Слово было " + word + ". Вы не угодали.");
}
