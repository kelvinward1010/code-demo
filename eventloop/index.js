
// // 1. Compare Task Queue vs Microtask Queue
// console.log('Start');

// setTimeout(() => {
//     console.log('Macrotask: setTimeout');
// }, 0);

// Promise.resolve()
//     .then(() => {
//         console.log('Microtask: Promise.then');
//     });

// console.log('End');



// // 2. Promise inside setTimeOut
console.log('Start');

setTimeout(() => {
    console.log('Timeout callback started');

    Promise.resolve().then(() => {
        console.log('Promise inside setTimeout');
    });

    console.log('Timeout callback ended');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise outside setTimeout');
});

console.log('End');


// 3. SetTimeout in Promise
// console.log('Start');

// Promise.resolve().then(() => {
//   console.log('Promise then started');
  
//   setTimeout(() => {
//     console.log('setTimeout inside Promise');
//   }, 0);
  
//   console.log('Promise then ended');
// });

// console.log('End');




// 4. Nested Event Loop
// async function main() {
//     console.log('Start');
//     await new Promise((resolve) => setTimeout(resolve, 0));
//     console.log('End');
// }

// // setTimeout(() => {
// //     main();
// // },3000)
// main();
// console.log('Middle');



// 5. setTimeOut in setTimeOut
// console.log('Start');
// setTimeout(() => {
//     console.log('First setTimeout');

//     setTimeout(() => {
//         console.log('Second setTimeout');
//     }, 1000);
// }, 5000);
// console.log('End');
