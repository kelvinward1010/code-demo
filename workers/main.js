// main.js
document.getElementById('startWithoutWorker').addEventListener('click', function () {
    const startTime = performance.now();
    const result = fibonacci(40); // Tính toán số Fibonacci thứ 40
    const endTime = performance.now();
    document.getElementById('result').textContent = `Result: ${result}. Time taken without Web Worker: ${endTime - startTime} ms.`;
});

document.getElementById('startWithWorker').addEventListener('click', function () {
    if (window.Worker) {
        const worker = new Worker('worker.js', {
            workerData: {thread_count: 4}
        });
        const startTime = performance.now();

        worker.postMessage(40); // Gửi một thông điệp tới Web Worker

        worker.addEventListener('message', function (e) {
            const endTime = performance.now();
            document.getElementById('result').textContent = `Result: ${e.data}. Time taken with Web Worker: ${endTime - startTime} ms.`;
        }, false);

        worker.addEventListener('error', function (e) {
            console.error('Error in Worker: ', e.message);
        }, false);
    } else {
        console.log('Your browser doesn\'t support Web Workers.');
    }
});

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
