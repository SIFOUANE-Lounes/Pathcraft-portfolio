function calculateAverage(a: number, b: number, c: number) {
    const result = (a + b + c) / 3
    console.log(Math.round(result * 100) / 100);
}
calculateAverage(10, 13.4, 19.1)