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
var test = []
test.push("Serega")// push добавляет в масив элемент в конец
test.push("Live")
test.push("Check")
var newArray = dinosaurs.concat(test)
var stringArray = newArray.join()//join превращает массив в строку и то что задается в скобках есть разделителем элементов
console.log(stringArray)
var stringArrayTwo = newArray.join(" and ")
console.log(stringArrayTwo)
