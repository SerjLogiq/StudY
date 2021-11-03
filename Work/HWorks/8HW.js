//### first task
function add(number1, number2) {
    return number1 + number2
}

function multiply(number1, number2) {
    return number1 * number2
}

var result = add(multiply(36325, 9824), 777)
console.log(result)

//### second task
function areArraysSame(ArrayOne, ArrayTwo) {
    if (ArrayOne.length != ArrayTwo.length) {
        return false
    }
    for (i = 0; i < ArrayOne.length; i++) {
        if (ArrayOne[i] !== ArrayTwo[i]) {
            return false
        }
    }
    return true
}

console.log(areArraysSame([1, 2, 3, "a"], [1, 2, 3, "a", 5]))
console.log(areArraysSame([1, 2, 3], [4, 5, 6]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]))


//### task three, code is commented because it should be ran with html code
/*var pickWord = function () {
    // Возвращает случайно выбранное слово
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

    return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
    // Возвращает итоговый массив для заданного слова word
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    return answerArray;
};

var showPlayerProgress = function (answerArray) {
    // С помощью alert отображает текущее состояние игры
    alert(answerArray.join(" "));
};

var getGuess = function () {
    // Запрашивает ответ игрока с помощью prompt
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};

var updateGameState = function (guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }

    return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};

// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);
*/

