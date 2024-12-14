import { describe, it, expect } from 'vitest'
import { add } from '../utils';

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
});