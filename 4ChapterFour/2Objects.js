var dinosaurs = [
    {name: "Тираннозавр рекс", period: "Верхнемеловой"},
    {name: "Стегозавр", period: "Верхнеюрский"},
    {name: "Платеозавр", period: "Триасовый"}
]
console.log(dinosaurs[1])
console.log(dinosaurs[0].name.length)// Точечную нотацию можно использовать только с объектами, для массивов она не подходит.
var anna = {name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16]};
var dave = {name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40]};
var kate = {name: "Кейт", age: 9, luckyNumbers: [1, 2, 3]}
var friends = [anna, kate, dave]
console.log(friends[1])
console.log(friends[1].luckyNumbers[2])

var owedCoins = []
owedCoins["Ivan"] = 5000
owedCoins["Oleg"] = 4000
console.log(owedCoins)
owedCoins["Ivan"] += 3000
console.log(owedCoins)