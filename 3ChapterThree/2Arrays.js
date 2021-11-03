var dinosaurs = [
    "Тираннозавр",
    "Велоцираптор",
    "Стегозавр",
    "Трицератопс",
    "Брахиозавр",
    "Птеранодон",
    "Апатозавр",
    "Диплодок",
    "Компсогнат",
    "Lolo"
];
console.log(dinosaurs.length)
console.log(dinosaurs[dinosaurs.length - 1])
var test = []

test.push("Serega")// push добавляет в масив элемент в конец
test.push("Live")
test.push("Check")
test.unshift("Ella")//unshift добавляет элемент в начало массива
console.log(test)
var x = test.pop()//pop удаляет последний элемент массива и может его задать в переменную если это надо
console.log(test)
console.log(x)
var z = test.shift()//shift удаляет первый элемент массива
console.log(test)
console.log(z)

var c = dinosaurs.concat(test)//contact склеивает два массива,можно обьеденить несколько массивов просто писать через запятую в скобках имя массива

console.log(c)
console.log(c.indexOf("Serega"))//indexOf возвращает индекс/номер элемента в массиве
console.log(c[10])
console.log(c.indexOf("SeregaЫ"))//js вернет -1 если такого элемента нет в массиве
c.push("Serega")
console.log(c)
console.log(c.indexOf("Serega"))


