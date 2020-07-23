function processInstructions(input) {
  const instructions = input.split(', ');
  let pos = [0, 0];
  let currentDir = 0; // Norte

  // 0 -> Norte
  // 1 -> Este
  // 2 -> Sur
  // 3 -> Oeste

  for (let i = 0; i < instructions.length; i += 1) {
    const turnTo = instructions[i][0];
    const steps = parseInt(instructions[i].slice(1), 10);

    if (turnTo === 'L') {
      currentDir = currentDir === 0 ? 3 : currentDir - 1;
    } else {
      currentDir = currentDir === 3 ? 0 : currentDir + 1;
    }

    switch (currentDir) {
      case 0:
        pos[1] += steps;
        break;
      case 1:
        pos[0] += steps;
        break;
      case 2:
        pos[1] -= steps;
        break;
      case 3:
        pos[0] -= steps;
    }
  }

  return Math.abs(pos[0]) + Math.abs(pos[1]);
}

const input = 'R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1';

const result = processInstructions(input);
console.log(result);


// const { pos } = input.split(', ').reduce(
//   ({ pos, dir }, instruction) => {
//     const turnTo = instruction[0];
//     const steps = parseInt(instruction.slice(1), 10);
//     const newDir = (
//       (turnTo === 'L')
//         ? (dir === 0)
//           ? 3
//           : dir - 1
//         : (dir === 3)
//           ? 0
//           : dir + 1
//     );

//     switch (newDir) {
//       case 0: // Norte
//         return { pos: [pos[0], pos[1] + steps], dir: newDir };
//       case 1: // Este
//         return { pos: [pos[0] + steps, pos[1]], dir: newDir };
//       case 2: // Sur
//         return { pos: [pos[0], pos[1] - steps], dir: newDir };
//       case 3: // Oeste
//         return { pos: [pos[0] - steps, pos[1]], dir: newDir };
//     }
//   },
//   { pos: [0, 0], dir: 0 },
// );

// console.log(Math.abs(pos[0]) + Math.abs(pos[1]));