var double = function (number) {
    return number * 3;
};
var triple = function (number){
    return number * 3
}
var x1 = 1000
var x2 = 100
var result = double(x1) + triple(x2)
//console.log(result)
var res = double(double(x1))
console.log(res)