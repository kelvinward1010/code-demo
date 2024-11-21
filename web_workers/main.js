function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// // main.js
document.getElementById('startWithoutWorker').addEventListener('click', function () {
    const startTime = performance.now();
    const result = fibonacci(40);
    const endTime = performance.now();
    document.getElementById('result').textContent = `Result: ${result}. Time taken without Web Worker: ${endTime - startTime} ms.`;
});

document.getElementById('startWithWorker').addEventListener('click', function () {
    if (window.Worker) {
        const worker = new Worker('worker.js');
        const startTime = performance.now();

        worker.postMessage(40);

        worker.addEventListener('message', (e) => {
            const endTime = performance.now();
            document.getElementById('result').textContent = `Result: ${e.data}. Time taken with Web Worker: ${endTime - startTime} ms.`;
        }, false);

        worker.addEventListener('error', (e) => {
            console.error(e.message);
        }, false);
    } else {
        console.log('Your browser doesn\'t support Web Workers.');
    }
});

