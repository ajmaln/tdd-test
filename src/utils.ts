import AdditionError from "./errors/AdditionError";


export const extractDelimiterAndNumbersString = (input: string) => {
    if (!input.startsWith('//')) return { delimiter: ',', numbersString: input };

    const lines = input.split('\n');
    return { delimiter: lines[0].slice(2), numbersString: lines.slice(1).join('\n') };
}

export const add = (input: string) => {
    const { delimiter, numbersString } = extractDelimiterAndNumbersString(input);
    const numbers = numbersString.split(new RegExp(`[${delimiter}\n]`)).map(Number);
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new AdditionError(`Negative numbers are not allowed ${negatives.join(',')}`);
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
};