// Составить скрипт, который запрашивает у пользователя 
// ввести номер кредитной карты.
// Скрипт должен обработать полученный номер и показать 
// на странице последние 4 цифры а остальные цифры карты
//  должны заменены на *.
// **Пример: "Номер вашей карты: **********1245"**

let myCardNumber = ( prompt("введите  16-значный номер кредитной карты") );

let myCardRepl = myCardNumber.slice( 0,12).replace(/\d/g, "*");

for ( ; myCardNumber.length !== 16; ) {
    myCardNumber = prompt( " попробуйте еще раз");
    if ( myCardNumber.length == 16) {
        alert( "номер кредитной карты: " +myCardRepl + myCardNumber.slice( 12) );
    }
}

