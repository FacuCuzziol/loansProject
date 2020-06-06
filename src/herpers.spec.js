import calcularTotal from './helpers.js';




describe('Calculate Total Function', () => {
    it('Calculates a total', () => {
      expect(calcularTotal(900,3)).toEqual(1575);
      expect(calcularTotal(900,12)).toEqual(1260);
    });
  });