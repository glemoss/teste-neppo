import { describe, it, expect, vi } from 'vitest';
import { handleMenuSelection } from '../../src/bot/menu.js';
import { STATES } from '../../src/bot/states.js';
import * as utils from '../../src/utils/index.js';

describe('Menu', () => {
    it('should return CONSULTAR_CLIMA for option 1', () => {
        vi.spyOn(utils, 'ask').mockReturnValue('1');
        expect(handleMenuSelection()).toBe(STATES.CONSULTAR_CLIMA);
    });

    it('should return CONSULTAR_CEP for option 2', () => {
        vi.spyOn(utils, 'ask').mockReturnValue('2');
        expect(handleMenuSelection()).toBe(STATES.CONSULTAR_CEP);
    });

    it('should return EXIT for option 3', () => {
        vi.spyOn(utils, 'ask').mockReturnValue('3');
        expect(handleMenuSelection()).toBe(STATES.EXIT);
    });

    it('should return MENU for invalid option', () => {
        vi.spyOn(utils, 'ask').mockReturnValue('invalid');
        expect(handleMenuSelection()).toBe(STATES.MENU);
    });
});