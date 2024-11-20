function fetchData() {
    console.log("1")
    console.log(Date.now())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data); // Nếu thành công, gọi resolve
            } else {
                reject(new Error('Something went wrong')); // Nếu thất bại, gọi reject
            }
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // In ra dữ liệu nếu thành công
        
    })
    .catch(error => {
        console.error(error); // Xử lý lỗi nếu có
    });

function fetchData2(){
    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data); // Nếu thành công, gọi resolve
            } else {
                reject(new Error('Something went wrong')); // Nếu thất bại, gọi reject
            }
        }, 3000);
    })
    console.log("2")
    return res;
}

function fetchData3(){
    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John Doe', age: 30 };
            if (data) {
                resolve(data); // Nếu thành công, gọi resolve
            } else {
                reject(new Error('Something went wrong')); // Nếu thất bại, gọi reject
            }
        }, 1000);
    })
    console.log("3")
    return res;
}


// fetchData().then(() => {
//     fetchData2();
//     fetchData3();
// }).finally(() => {
//     console.log("FETCHed data")
// })

function fetchAll1(){
    return Promise.all([fetchData(), fetchData2(), fetchData3()]).
        then((e) => {
            console.log("FETCHed all");
            console.log(e)
        }).catch((e) => {
            console.log(e)
        });
}


fetchAll1();

function fetchAll2(){
    // const fetch = Promise.
}


// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// // other
// async function fetchData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// }