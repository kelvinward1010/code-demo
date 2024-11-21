const express = require("express");
const {Worker, isMainThread} = require('worker_threads')

const app = express();

const port = 3000;
const THREAD_COUNT = 4;

app.get("/", (req, res) => {
    let counter = 0;
    for (let i = 0; i < 20000000000; i++){
        counter += 1;
    }
    res.status(200).send(`result is: ${counter}`)
})

function createWorker(){
    return new Promise((resolve, reject) => {
        const worker = new Worker('./four-workers.js', {
            workerData: {thread_count: THREAD_COUNT}
        })

        worker.on("message", (data) =>{
            // res.status(200).send(`result: ${data}`)
            resolve(data)
        })
    
        worker.on("error", (error) =>{
            // res.status(200).send(`An error: ${error}`)
            reject(`An error: ${error}`);
        })

    })
}

app.get("/blocking", async (req, res) => {
    const workerProsmise= [];

    for (let i = 0; i < THREAD_COUNT; i ++){
        workerProsmise.push(createWorker())
    }

    const thread_results = await Promise.all(workerProsmise)
    const total = thread_results[0] + thread_results[1] + thread_results[2] + thread_results[3];
    
    res.status(200).send(`result is: ${total}`)
})


app.get('/shareworker', async (req, res) => {
    if(isMainThread){
        const sharedBuffer = new SharedArrayBuffer(1024); // 1024 bytes
        const sharedArray = new Int32Array(sharedBuffer); 

        for (let i = 0; i < sharedArray.length; i++) { 
            sharedArray[i] = i; 
        }

        const worker = new Worker(__filename, {
            workerData: sharedBuffer
        })

        worker.on("message", () => {
            console.log("Worker đã update SharedArrayBuffer")
            console.log(sharedArray?.slice(0,10))
        })

        worker.postMessage('Bắt đầu cập nhật');
    }else{
        const sharedArray = new Int32Array(workerData);
        parentPort.on('message', () => { 
            for (let i = 0; i < sharedArray.length; i++) { 
                sharedArray[i] *= 2;
            } 
            parentPort.postMessage('Đã cập nhật'); 
        });
    }
})



app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})


/*
Khởi tạo workerPromise:
Mảng workerProsmise được tạo để chứa các Promise do hàm createWorker trả về.

Tạo và thêm các Worker:
Một vòng lặp chạy THREAD_COUNT lần (ở đây là 4 lần) để tạo ra 4 worker.
Mỗi worker được tạo ra bằng cách gọi hàm createWorker() và Promise của nó được thêm vào workerProsmise.

Chờ đợi tất cả các Worker hoàn thành:
await Promise.all(workerProsmise) được sử dụng để chờ đợi tất cả các Promise trong workerProsmise hoàn thành.
thread_results sẽ là một mảng chứa kết quả từ tất cả các worker.

Tính tổng kết quả:
Biến total được tính bằng cách cộng tất cả các kết quả từ các worker lại với nhau.

Gửi kết quả tới client:
Cuối cùng, kết quả tổng (total) được gửi lại client với status code 200. 
*/