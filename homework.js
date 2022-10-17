//   ONE
//   const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

//  HW notes. const verdict refers to const declareMurderer variable defined above.  This injects the value defined in const scenario, key value pair murderer: 'Miss Scarlet'
//  HW notes. should console.log `The murderer is Miss Scarlet`

// TWO


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// const changeMurderer should refer to Professor Plum and not Mrs. Peacock as this would throw an error for trying to reassign. 

// THREE

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// This should first output the const variable associated with declareMurderer function 'First Verdict: The murderer is Mrs. Peacock.'
// 'Second Verdict: The murderer is Professor Plum'


// FOUR

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// SuspectThree is let so is replaced with Colonel Mustard.  
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard are output to the console 
// Suspect three is Colonel Mustard. Got this wrong*********************
// Suspect three refers to original let because it's not in the same block as const declareAllSuspects


// FIVE

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

//   I think output is refering to declareWeapon concatanated string which has had the candlestick replaced with revolver.  
//   Const verdict refers to this and outputs: The weapon is the Revolver


// SIX

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// const murderer is first replaced with Mr Green then replaced again with plotTwist murderer Mrs White
// declareMurderer returns the string: The murderer is Mrs White


// SEVERN

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// think it'll output: The murderer is Miss Scarlet.  Reason: key value pair can be changed even if const on variable ChangeMurderer/ murderer, Same with plotTwist/ murderer changed again to miss Scarlett.
// Potentially not in the same associated block if ealier iteration
// Wrong.  Think this is because of block association.  Interesting to find out, don't think its the const for reasons above.  
// got the below correct so now think the const is the reason here. 

// EIGHT

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

// Mrs peacock, Dinning room, candlestick.  The weapon is Candle Stick
// got this right but Questioning the above reasoning.  Now think it is because of the const.  

// NINE

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// wrong.  
// reason murderer === string 'Professor Plum'.  This is not the same so doesn't replace murderer. Reasoning below. Lets see. 
// Strict Equality (===)
// The triple equals (strict equality) operator compares for equality by checking if both the type and value are the same.