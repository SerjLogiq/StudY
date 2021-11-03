var helloFunction = function (name) {
    console.log("Hello " + name + " !")
}
helloFunction("Serega")
var testFunction = function (x) {
    for (i = 0; i < x; i++) {
        console.log("chicks " + i)
    }
}
testFunction(10)

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
}
printMultipleTimes(2,".!.")

var z = 39.29
var x = 1395186.61000000
console.log(z/x)