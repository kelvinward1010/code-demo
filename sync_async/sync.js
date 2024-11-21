


console.log('Start');
const startTime = Date.now();
let counter = 0;
for (let i = 0; i < 5e9; i++) {
  counter += 1;
}
const endTime = Date.now(); 
const elapsedTime = (endTime - startTime) / 1000;
console.log(`Elapsed time: ${elapsedTime}`)

console.log('End');
