import { describe, it, expect } from 'vitest';
import { capitalizeWords } from '../../src/utils/index.js';

describe('Utils', () => {
    describe('capitalizeWords', () => {
        it('should capitalize first letter of each word', () => {
            expect(capitalizeWords('são paulo')).toBe('São Paulo');
            expect(capitalizeWords('RIO DE JANEIRO')).toBe('Rio De Janeiro');
            expect(capitalizeWords('brasília')).toBe('Brasília');
        });

        it('should handle empty string', () => {
            expect(capitalizeWords('')).toBe('');
        });

        it('should handle single word', () => {
            expect(capitalizeWords('curitiba')).toBe('Curitiba');
        });
    });
});