const URL_EXAMPLE = 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json';
const URL_EXAMPLE2 = 'https://gw.alipayobjects.com/os/antvdemo/assets/data/sp500.json';

// 1. Normal case
// async function example() {
//     return "Hello, world!";
// }  
// example().then(console.log);


// 2. Async vs Await
// async function fetchData() {
//     const response = await fetch(URL_EXAMPLE);
//     const data = await response.json();
//     return data;
// }
// fetchData().then((res) => { console.log(res)});



// 3. Async vs Await dùng với try catch giúp xử lý lỗi:
// async function fetchData() {
//     try {
//         const response = await fetch(URL_EXAMPLE);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// }
// fetchData().then((res) => { console.log(res)});


// 3. Chờ nhiều promise song song:
// async function fetchData() {
//     const [data1, data2] = await Promise.all([
//         fetch(URL_EXAMPLE).then((response) => response.json()),
//         fetch(URL_EXAMPLE2).then((response) => response.json())
//     ])
//     return { data1, data2 }
// }

// fetchData().then((res) => { console.log(res) });


//4. Dùng await trong vòng lặp
// function someAsyncFunction(item){
//     if(typeof item === 'number'){
//         return 1 + item;
//     }else if(typeof item === 'string'){
//         return new Promise(async (resolve, reject) => {
//             const data = fetch(item).then((response) => response.json());
//             console.log(data)
//             return data ? resolve(data) : reject(new Error('Error here!'));
//         })
//     }
// }

// async function processArray(array) {
//     for (let item of array) {
//         const result = await someAsyncFunction(item);
//         console.log(result);
//     }
// }

// processArray([URL_EXAMPLE, URL_EXAMPLE2, 3]);


async function fetch1(){
    const result = await fetch(URL_EXAMPLE).then((response) => response.json());
    console.log(result)
}

async function fetch2(){
    const result = await fetch(URL_EXAMPLE2).then((response) => response.json());
    console.log(result)
}


function fetchFinal(){
    fetch1()
    fetch2()
}

fetchFinal()
