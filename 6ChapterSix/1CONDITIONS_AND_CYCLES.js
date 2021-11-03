var number = Math.floor(Math.random() * 1000)
console.log(number)
if (number > 500) {
    console.log("Number is " + number + " too big, you can't pass!")
} else {
    console.log("Number is " + number + " and you can pass!")
}
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
    console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
    console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
    console.log("Ладно, закажу свинину.");
} else {
    console.log("Что ж, остается рис с яйцом.");
}
