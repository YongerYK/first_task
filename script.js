let money = +prompt("Ваш буджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let answer_1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer_2 = +prompt("Во сколько обойдется?");

var appDate = {
    him_money : money,
    timeData : time,
    expenses : {
        answer_1 : answer_2
    },
    optionalExpenses : {},
    income : [],
    savings : false
}

alert( "Бюджет на 1 день : " + (( appDate.him_money ) - ( appDate.expenses.answer_1 ))/30 );

/*
Сколько типов данных существует в JS? - 7

Как вывести информацию в консоль? - console.log("значение");

Какая функция операторов || и &&? - || = true если один из них true, && = true если оба из них true
*/