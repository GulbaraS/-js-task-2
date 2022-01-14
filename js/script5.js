// Составить скрипт, который запрашивает у пользователя 
// ввести номер кредитной карты.
// Скрипт должен обработать полученный номер и показать 
// на странице последние 4 цифры а остальные цифры карты
//  должны заменены на *.
// **Пример: "Номер вашей карты: **********1245"**

let userCardNumber = ( prompt("введите  16-значный номер кредитной карты") );

let cardRepl = userCardNumber.slice( 0,12).replace(/\d/g, "*");
         
alert( "номер кредитной карты: " +cardRepl + userCardNumber.slice( 12) );

console.log( "номер кредитной карты: " +cardRepl + userCardNumber.slice( 12) );




 /* ЛИБО ДРУГОЙ ВАРИАНТ:

 let cardNumber = "4446783498671245";

let 
theRest = cardNumber.slice(0, 12), 
theReplace = cardNumber.replace(theRest, '*')

let 
firstChar = theReplace[0],
firstCharRepeat = firstChar.repeat(12);

console.log( firstCharRepeat + theReplace);
*/