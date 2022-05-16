// const { stdin, stdout } = process;
// stdout.write('Im9?\n')
// stdin.on( 'data', data =>{
// stdout.write('Hello, ')
// stdout.write(data)
// setTimeout(() => process.exit(),2000)
// }
// )
// process.on('exit', () => stdout.write('gg,ez game na 2k pts'));
// const { stdin, stdout } = process;

// stdin.on('data', data => {
//     const dataStringified = data.toString();
//     stdout.write('Cообщение в верхнем регистре: ');
//     stdout.write(dataStringified.split('').reverse().join(''));
//     process.exit();
// });
 
// const flagIndex = process.argv.indexOf('-m');
// if (flagIndex !== -1) {
//   const message = process.argv[flagIndex + 1];
//   console.log(message);
// }

// console.log(process.argv);

// const protoObj = {
//   sayHi() {
//       console.log('Hi!');
//   }
// };
// const obj = {};
// obj.__proto__ = protoObj;
// obj.sayHi();

// const { stdin, stdout,exit } = process;

// stdout.write('Введите, пожалуйста, два числа\n');
// stdin.on('data', data => {
//     const numString = data.toString();
//     const numStringsArray = numString.split(' ');
//     stdout.write(numStringsArray)
//   }
//     )

// const { stdout, stdin, exit } = process;
// const flag = process.argv[2];
// const allowedFlags = ['-m', '-s'];
// if (!allowedFlags.includes(flag)) {
//     stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
//     exit();
// }
// stdout.write('Введите, пожалуйста, два числа\n');
// stdin.on('data', data => {
//     const numString = data.toString();
//     const numStringsArray = numString.split(' ');
//     const hasIncorrectLength = numStringsArray.length !== 2;
//     const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
//     if (hasIncorrectLength || hasIncorrectValues) {
//         stdout.write('Нужно ввести 2 числа, разделенных пробелом');
//         exit();
//     }
//     const arr  = numStringsArray.map(numStr => +numStr);
//     if (flag === '-s') {
//         const sum = numStringsArray[0] + numStringsArray[1];
//         stdout.write(`${numStringsArray[0]} + ${numStringsArray[1]} = ${sum}`);
//     } else {
//         const mult = numStringsArray[0] * numStringsArray[1];
//         stdout.write(`${numStringsArray[0]} * ${numStringsArray[1]} = ${mult}`);
//     }
//     exit();
// });