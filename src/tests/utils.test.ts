import { describe, it, expect } from 'vitest'
import { add, extractDelimiterAndNumbersString } from '../utils';

describe('add', () => {
    it('should return 0 when the input is an empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return 1 when the input is "1"', () => {
        expect(add('1')).toBe(1);
    });

    it('should add two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    it('should add three numbers', () => {
        expect(add('1,5,10')).toBe(16);
    });

    it('should support new lines', () => {
        expect(add('1\n5,10\n90,15')).toBe(121);
    });

    it('should support custom delimiter', () => {
        expect(add('//;\n1;5;10;99;15')).toBe(130);
    });

    it('should support custom delimiter with new lines', () => {
        expect(add('//;\n1\n5;10\n110;15')).toBe(141);
    });

    it('should throw an error when negative numbers are present', () => {
        expect(() => add('1,5,-10')).toThrow('Negative numbers are not allowed -10');
    });

    it('should throw an error when multiple negative numbers are present', () => {
        expect(() => add('1,5,-10,-15,-20')).toThrow('Negative numbers are not allowed -10,-15,-20');
    });

    it('should throw an error if negative numbers are present with custom delimiter', () => {
        expect(() => add('//;\n1;-5;-10;-15;-20')).toThrow('Negative numbers are not allowed -5,-10,-15,-20');
    });
});

describe('extractDelimiterAndNumbersString', () => {
    it('should return comma as delimiter when input does not start with //', () => {
        expect(extractDelimiterAndNumbersString('1,5,10')).toEqual({ delimiter: ',', numbersString: '1,5,10' });
    });

    it('should return the delimiter and numbers string', () => {
        expect(extractDelimiterAndNumbersString('//;\n1;5;10;99;15')).toEqual({ delimiter: ';', numbersString: '1;5;10;99;15' });
    });
});