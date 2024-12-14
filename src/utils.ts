

export const add = (numbers: string) => numbers.split(',').reduce((acc, curr) => acc + Number(curr), 0);

