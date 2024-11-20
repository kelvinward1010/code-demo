function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('kelvin', sayGoodbye);



//Callback hell
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const userData = { name: 'John Doe', age: 30 };
        callback(null, userData);
    }, 1000);
}

function fetchUserPosts(userId, userData, callback) {
    setTimeout(() => {
        const posts = ['post1', 'post2', 'post3'];
        callback(null, posts);
    }, 500);
}

function displayUserInfo(userData, posts) {
    console.log('User:', userData);
    console.log('Posts:', posts);
}

fetchUserData(1, (err, userData) => {
    if (err) {
        console.error(err);
    } else {
        fetchUserPosts(1, userData, (err, posts) => {
            if (err) {
                console.error(err);
            } else {
                displayUserInfo(userData, posts);
            }
        });
    }
});