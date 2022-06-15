// 2* Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

const checkAge = function(age) {
    if (typeof (age) != 'number') {
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

    checkAge("js")
    checkAge(true)
    checkAge(false)
    checkAge(17)
    checkAge(18)
    checkAge(61)