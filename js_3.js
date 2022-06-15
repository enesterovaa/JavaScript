// 3** Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА)
// пропускалось, преобразовываясь в number.

const checkAge = function(age) {
    if (isNaN(age) || age <= 0 || age == true || age == false) {
        console.log("Invalid data") 
    }
    else if (age < 18) {
        console.log("You don't have access cause your age is " + age + ". It's less than 18.");
    }
    else if (age >= 18 && age <= 60) {
        console.log("Welcome!");
    }
    else if (age > 60 ){
        console.log("Keep calm and look Culture channel");
    }
    else {
        console.log("Technical work");
    }
    }
    checkAge("2")
    checkAge("19")
    checkAge(17)
    checkAge(18)
    checkAge(true)
    checkAge([1,2,3])
