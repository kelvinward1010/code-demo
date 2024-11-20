
// Normal Promise 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data 1...");
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Something went wrong'));
            }
        }, 1000);
    });
}

// fetchData().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("End")
// });



// Chaining Promise
fetchData().then((data) => {
    console.log(data)
    return Promise.resolve(1);
}).then((dataOther) => {
    console.log(dataOther)
    return Promise.resolve(2);
}).catch((err) => {
    console.log(err)
})