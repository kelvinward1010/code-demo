// worker.js
self.addEventListener('message', function (e) {
    const result = fibonacci(e.data);
    self.postMessage(result);
}, false);

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
