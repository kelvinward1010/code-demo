
// Normal Promise 
function fetchData(time, message) {
    console.log(message);
    console.log(Date.now());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Something went wrong'));
            }
        }, time);
    });
}

function fetchData2(time, message) {
    console.log(message);
    console.log(Date.now());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = null;
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Something went wrong'));
            }
        }, time);
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data 3...");
            console.log(Date.now());
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Something went wrong'));
            }
        }, 1000);
    });
}

// const p1 = fetchData(1000, 'Fetching data 1...');
// const p2 = fetchData(1000, 'Fetching data 2...');
// const p3 = fetchData(1000, 'Fetching data 3...');

//const pError = fetchData2(500, 'Fetching data Error...');

// fetchData().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("End")
// });



// Chaining Promise
// fetchData()
// .then((data) => {
//     console.log(data)
//     return Promise.resolve(1);
// }).then((dataOther) => {
//     console.log("kq",dataOther)
//     return Promise.resolve(2);
// }).catch((err) => {
//     console.log(err)
// })


// Run all three Promises at the same time and console.log a message
// const promises1 = Promise.all([p1,p2,p3]).then((data) => {
//     console.log(data);
//     console.log("Done!")
// }).catch((error) => { console.error(error) });
// console.log(promises1)


// Run all kể cả lỗi hay không cũng trả tất.
// const promises2 = Promise.allSettled([fetchData(1000, 'Fetching data 1...'),fetchData2(1000, 'Fetching data Error...'),fetchData(1000, 'Fetching data 3...')]).then((data) => {
//     console.log(data);
//     console.log("Done!")
// }).catch((error) => { console.error(error) });
// console.log(promises2)

//Promise.race là một phương thức trong JavaScript Promises được sử dụng để xử lý nhiều Promise cùng một lúc và trả về kết quả của Promise hoàn thành đầu tiên, dù đó là Promise được giải quyết (resolved) hay bị từ chối (rejected)
// Quản lý thời gian chờ (Timeout): Promise.race có thể được sử dụng để thiết lập thời gian chờ cho một tác vụ bất đồng bộ. Nếu tác vụ không hoàn thành trong thời gian cho phép, một Promise bị từ chối có thể được kích hoạt để quản lý tình huống này.
// Run all và trả về kết quả đầu tiên dù có lỗi hay không.
// const promises3 = Promise.race([fetchData(1000, 'Fetching data 1...'),fetchData2(500, 'Fetching data Error...'),fetchData(1000, 'Fetching data 3...')]).then((data) => {
//     console.log(data);
//     console.log("Done!")
// }).catch((error) => { console.error(error) });
// console.log(promises3)

// function fetchWithTimeout(url, timeout) {
//     return Promise.race([
//         fetch(url),
//         new Promise((_, reject) =>
//             setTimeout(() => reject(new Error('Request timed out')), timeout)
//         )
//     ]);
// }

// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 5000)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// Chỉ nhận promise thành công đầu tiên nếu không có thì báo lỗi chứa thông tin tất cả các lỗi từ tất cả promise
// const promises4 = Promise.any([fetchData(1000, 'Fetching data 1...'), fetchData2(1000, 'Fetching data Error...'), fetchData(1000, 'Fetching data 3...')]).then((data) => {
//     console.log(data);
//     console.log("Done!")
// }).catch((error) => { console.error(error) });
// console.log(promises4)


// Các trường hợp các promise lồng nhau với các method trên:
function fetchOK(time, message) {
    console.log(message);
    console.log(Date.now());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Something went wrong'));
            }
        }, time);
    });
}

function fetchFailed(time, message) {
    console.log(message);
    console.log(Date.now());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = null;
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Something went wrong'));
            }
        }, time);
    });
}


// dùng vs all trong promise chain
// fetchOK(1000, "Fetching 1...")
//     .then(data1 => {
//         console.log('Data 1:', data1);
//         return Promise.all([fetchOK(1000, "Fetching 2..."), fetchOK(1000, "Fetching 3...")]); // Đợi cả hai Promise hoàn thành
//     })
//     .then(([data2, data3]) => {
//         console.log('Data 2:', data2);
//         console.log('Data 3:', data3);
//         return [data2, data3]; // Sử dụng dữ liệu từ cả hai bước trước
//     })
//     .then(data4 => {
//         console.log('Data 4:', data4);
//     })
//     .catch(error => {
//         console.error('An error occurred:', error);
//     })
//     .finally(() => {
//         console.log('All tasks complete');
//     });

// dùng vs race trong promise chain
// fetchOK(1000, "Fetching 1...")
//     .then(data1 => {
//         console.log('Data 1:', data1);
//         return Promise.race([fetchFailed(500, "Fetching Error..."), fetchOK(1000, "Fetching 3...")]); // Đợi cả hai Promise hoàn thành
//     })
//     .then(data2or3 => {
//         console.log('Data 4:', data2or3);
//     })
//     .catch(error => {
//         console.error('An error occurred:', error);
//     })
//     .finally(() => {
//         console.log('All tasks complete');
//     });

// dùng vs any trong promise chain
// fetchOK(1000, "Fetching 1...")
//     .then(data1 => {
//         console.log('Data 1:', data1);
//         return Promise.any([fetchFailed(500, "Fetching Error..."), fetchOK(1000, "Fetching 3...")]); // Đợi cả hai Promise hoàn thành
//     })
//     .then(data2or3 => {
//         console.log('Data 4:', data2or3);
//     })
//     .catch(error => {
//         console.error('An error occurred:', error);
//     })
//     .finally(() => {
//         console.log('All tasks complete');
//     });