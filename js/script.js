"use strict"

// ===========================Оператори=========================
// console.log(`35` - "22");

// ===========================================================
// console.log(`35` * "22");

// ==========================================================
// let numberOne = 558;
// let numberTwo = 22;
// ++numberTwo;

// let numberThree = numberOne > ++numberTwo;

// console.log(numberThree);

// =============================================================
// let userCounter = 0;
// let newUsers = ++userCounter;

// console.log(newUsers);

// ============================================================
// console.log(!false && 11 || 18 && !'');

// =============================================================
// let name = 0;
// console.log(name ?? "Без ім'я");


// ===============Умовні оператори================================

// if (1 === "1") {
// 	console.log(`True`);
// } else {
// 	console.log(`fail`);
// }

// if (5 == "5") {
// 	console.log(`True`);
// } else {
// 	console.log(`fail`);
// }

// let message = (92 > `11` && 58 < 100) ? `True` : `Fail`;
// console.log(message);

// if (0) {
// 	console.log(`fail`);
// } else if (" ") {
// 	console.log(`True`);
// }

// ==============Цикли================================================

// let num = 0;

// while (num < 6) {
// 	console.log(num);
// 	num++;
// }

// for (let num = 0; num < 6; num++) {
// 	console.log(num);
// }

// let num = 0;

// do {
// 	console.log(num);
// 	num++;
// } while (num < 6);



// ==========================================================================

// let num = 8;

// while (num) {
// 	console.log(num);
// 	num--;
// }

// =============================================================================

// for (let num = 0; num < 3; num++) {
// 	console.log(`Number: ${num}`);
// }

// let num = 0

// while (num < 3) {
// 	num++;
// 	console.log(`Number: ${num}`);
// }

// =================================================================================
// firstFor: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		console.log(size);
// 		if (size === 1) {
// 			break firstFor;
// 		}
// 		console.log(`Stoped, num = ${size}`);
// 	}
// }

// ========================Числа===================================================

// let sourceNum = 1.005 + Number.EPSILON;
// let numFour = Math.round(sourceNum * 100) / 100;
// console.log(numFour);

// ====================================================================================

// let value = parseFloat("135.58px");
// console.log(value);

// =======================================================================================

// let valueTwo = 58 + "Frilancer";

// if (valueTwo == NaN); {
// 	console.log(Number(valueTwo));
// 	console.log(isNaN(valueTwo));
// }

// =========================================================================================

// let numbOne = 10;
// let numbTwo = 58;
// let numbThree = 39;
// let numbFour = -150;
// let numbFive = 0;


// console.log(Math.max(numbOne, numbTwo, numbThree, numbFour, numbFive));

// =========================================================================================

// let num = Math.floor(58.858);
// console.log(num);


// =======================Рядки=========================================================================

// let fls = "frilancer";
// let text = `Hi! Im ${fls}`;
// console.log(text);

// ================================================================================================

// let text = `фрілансер`;

// console.log(text[5]);

// =========================================================================================================

// let text = 123 + `456`;
// console.log(text);

// ==========================================================================================================

// let text = `фрілансер`;
// console.log(text.toLocaleUpperCase());

// ===================================================================================================================
// let text = `фрілансер`;
// console.log(text.slice(3, 6));

// ====================================================================================================================

// let text = 'фрілансер';
// console.log(text.includes('лан', 3));
// ('лан', 3) // true, ('лан', 3) // false