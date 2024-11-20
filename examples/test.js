
function performHeave(){
    // setTimeout(() => {
    //     console.log("timeout")
    // },5000)
    let count = 0;
    for(let i = 0; i < 2e9; i++){
        count += 1;
    }
    return count;
}

console.log("Start");
const result = performHeave();
console.log(result);
console.log("End");