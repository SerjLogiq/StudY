var x = Math.random() * 100
var z = Math.random() * 1000//random генерит рандомное число от 0 до числа не включительно которое задается через *
var v = Math.floor(Math.random() * 10000)//floor щкругляет число до нижнего значения
console.log(x, z, v)


var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"]
var randomIndex = Math.floor(Math.random()*4)
console.log(randomWords[randomIndex])