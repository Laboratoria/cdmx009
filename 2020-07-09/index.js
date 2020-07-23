// export const calculateRequiredFuel = (mass) => {
//   return Math.floor(mass / 3) - 2
// };

export const calculateRequiredFuel = mass => Math.floor(mass / 3) - 2;

export const processInput = str => str.split('\n').reduce(
  (memo, item) => memo + calculateRequiredFuel(parseInt(item, 10)),
  0,
);

// export const processInput = (str) => {
//   return str.split('\n').reduce(
//     (memo, item) => {
//       return memo + calculateRequiredFuel(parseInt(item, 10));
//     },
//     0,
//   );
//   // const arr = str.split('\n').map(item => parseInt(item, 10));
//   // // let sum = 0;

//   // return arr.reduce((memo, item) => {
//   //   return memo + calculateRequiredFuel(item);
//   // }, 0);

//   // arr.forEach((item) => {
//   //   sum += calculateRequiredFuel(item);
//   // });

//   // for (let i = 0; i < arr.length; i++) {
//   //   sum += calculateRequiredFuel(arr[i]);
//   // }

//   // console.log(sum);

//   // return sum;
// };