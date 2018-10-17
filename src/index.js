module.exports = function (a, b) {
    return {
        x: (Math.random() * (a[2] - a[0]) + a[0]).toFixed(b) * 1,
        y: (Math.random() * (a[3] - a[1]) + a[1]).toFixed(b) * 1
    }
};