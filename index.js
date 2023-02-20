"use strict";
// document.getElementById("count").innerText = 5;
// let myAge = 46;
// console.log(myAge);
// let myAge = 46;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);
// let bonusPoints = 50;
// bonusPoints += 50;
// console.log(bonusPoints);
// bonusPoints -= 25;
// console.log(bonusPoints);
// bonusPoints += 70;
// console.log(bonusPoints);

// function number() {
//   console.log(42);
// }

// let lap1 = 35;
// let lap2 = 33;
// let lap3 = 36;
// function sumLaps() {
//   let total = lap1 + lap2 + lap3;
//   console.log(total);
// }

// sumLaps();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function totalLapTime() {
//   console.log(lap1 + lap2 + lap3);
// }
// totalLapTime();

// let lapsCompleted = 0;
// function incrementLapsCompleted() {
//   lapsCompleted += 1;
// }
// incrementLapsCompleted();
// incrementLapsCompleted();
// console.log(lapsCompleted);

// let customer = 0;
// function totalCustomer() {
//   customer += 10;
// }
// totalCustomer();
// totalCustomer();
// console.log(customer);

//
// let saveEl = document.getElementById("count-el");
// let save = count;
// function saving() {
//   save = count - 1;
//   saveEl.innerText = save;
// }

// let userName = "John";
// let message = "You have three new notifications";

// let messageToUser = userName + "," + " " + message;
// console.log(messageToUser);

// let firstName = "Ozzie";
// let greet = "Hi, my name is";
// let myGreet = greet + " " + firstName;
// console.log(myGreet);
// let point = 4;
// let bonusPoints = 10;
// let total = point + bonusPoints;
// console.log(total);
// console.log(4 + 5); //9
// console.log("2" + "4"); //24
// console.log("5" + 1); //51
// console.log(100 + "100"); //100100

// let welcomeEl = document.getElementById("welcome-el");
// let firstName = "Ozzie 🖐";
// let greet = "Hi, my name is";
// let myGreet = greet + " " + firstName;
// welcomeEl.innerText = myGreet;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let saving = count + " -";
  saveEl.innerText += ` ` + saving;
  countEl.innerText = 0;
  count = 0;
}
