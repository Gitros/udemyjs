

let numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

}

let math = (arg1, arg2, arg3) => {
    console.log(arg1 + arg2 * arg3);
}

math(1, 2, 3);

if (numbers.length > 5) {
    console.log(true);
} else {
    console.log(false);
}

console.log(`Tablica z cyframi ma ${numbers.length} elementów.`);