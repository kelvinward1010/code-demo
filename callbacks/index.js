// 1. Tạo hàm callback truyền như một đối số.
// function greet(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback();
// }
// function sayGoodbye() {
//     console.log('Goodbye!');
// }
// greet('kelvin', sayGoodbye);



// // 2. Callback hell
// function fetchUserData(userId, callback) {
//     setTimeout(() => {
//         const userData = { name: 'John Doe', age: 30 };
//         callback(null, userData);
//     }, 1000);
// }

// function fetchUserPosts(userId, userData, callback) {
//     setTimeout(() => {
//         const posts = ['post1', 'post2', 'post3'];
//         callback(null, posts);
//     }, 500);
// }

// function displayUserInfo(userData, posts) {
//     console.log('User:', userData);
//     console.log('Posts:', posts);
// }

// fetchUserData(1, (err, userData) => {
//     if (err) {
//         console.error(err);
//     } else {
//         fetchUserPosts(1, userData, (err, posts) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 displayUserInfo(userData, posts);
//             }
//         });
//     }
// });


// // 3. Callbacks in I/O Operations
// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// // 4. Callbacks in Array Methods
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled);


// 5. Error-First Callbacks
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});
