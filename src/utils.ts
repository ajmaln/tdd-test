

export const add = (numbers: string) => numbers.split(/[,\n]/).reduce((acc, curr) => acc + Number(curr), 0);

