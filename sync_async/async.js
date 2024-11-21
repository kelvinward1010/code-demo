// setTimeout
console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 2000);

console.log('End');


// FetchAPI
console.log('Start');

fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

console.log('End');
