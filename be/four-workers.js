const { workerData, parentPort } = require('worker_threads');

let counter = 0;
for (let i = 0; i < 20000000000 / workerData.thread_count; i++){ // workerData: Dữ liệu được truyền vào khi worker thread được khởi tạo.
    counter += 1;
}

parentPort.postMessage(counter) //parentPort: Kết nối dùng để gửi thông điệp giữa worker thread và thread cha (main thread).