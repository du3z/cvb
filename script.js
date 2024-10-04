"use strict";

console.log("Hello, world");



//база

// let userName = "Misha";

// let age = 22;

// let age = prompt('Skolko tibe let ?');

// let nation = prompt("Kakaya notion");

// if ( nation == "Koreec" || age >= 30 ){
//     console.log("Доступ разрешен");
// }

// else {
//     console.log("Доступ запрещен");
// }

// console.log(`${Ты родился в}   ${2024 - age}`);











//переменные для приема на работу 

let exp = +prompt("Skok let opit?");

let project = +prompt("Skoka project?");

let age = +prompt("Skoka let ?");

let name = "Ivan";




// Неудачная попытка приема на работу 
// if ((exp >= 5 && age >= 16 && project >= 4) || exp == 20) {
// 	console.log("Вы приняты на должность курьера");
// } else if (exp >= 20 && age - exp <= 16) {
// 	console.log("Не обманывай");
// } else if (project >= 10 && age <= 26) {
// 	console.log("Не обманывай");
// } else {
// 	console.log("Не подходишь");
// }



//Прием на работу 
if (exp >= 5 && age >= 17 + exp && project >= 4 && age >= 17 + project / 4) {
	console.log(name, "Вы приняты на должность курьера");
} else {
	console.log(
		name,
		"Не подходишь лучше найди что-то по своему уровню, программистом там стань"
	);
}










