

export const add = (input: string) => {
    let numbers = input;
    let delimiter = ',';
    if (input.startsWith('//')) {
        const lines = input.split('\n');
        delimiter = lines[0].slice(2);
        numbers = lines.slice(1).join('\n');
    }
    return numbers.split(new RegExp(`[${delimiter}\n]`)).reduce((acc, curr) => acc + Number(curr), 0);
};