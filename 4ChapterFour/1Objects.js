var man = {
    weight: 117,
    age: 30,
    height: 200
}
console.log("Serhii's weight is " + man["weight"])//можно вызывать значение ключа через []
console.log("Serhii's age is " + man.age)//либо через .

console.log(Object.keys(man))//вызов всех ключей обьекта
console.log(Object.values(man))//вызов всех значений обьекта

man["position"] = "Senior QA"//добавление в обьект нового ключа со значением
console.log(man)

man.interests = "Soccer"
console.log(man)