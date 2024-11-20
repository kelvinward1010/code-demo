function fetchData() {
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



async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));


// other
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}