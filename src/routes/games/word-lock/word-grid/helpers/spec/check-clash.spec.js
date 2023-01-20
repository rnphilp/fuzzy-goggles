import checkClash from '../check-clash';

const horizontalWord = {
  word: 'word',
  coordinates: [0, 0],
  direction: 'x',
};

const verticalWord = {
  word: 'word',
  coordinates: [0, 0],
  direction: 'y',
};

describe('checkClash()', () => {
  describe('returns false when there are no clashes', () => {
    it('passes with parallel words, not touching', () => {
      const testWord = {
        ...horizontalWord,
        coordinates: [0, 5],
      };
      expect(checkClash(testWord, [horizontalWord])).toBe(false);
    });
    it('passes with perpendicular words, not touching', () => {
      const testWord = {
        ...verticalWord,
        coordinates: [-8, 2],
      };
      expect(checkClash(testWord, [horizontalWord])).toBe(false);
    });
  });
  describe('returns true when there are clashes', () => {
    describe('direct clashes', () => {
      it('fails when there is a parallel end to end clash', () => {
        const testWord = {
          ...horizontalWord,
          coordinates: [3, 0],
        };
        expect(checkClash(testWord, [horizontalWord])).toBe(true);
      });
      it('fails when there is a perpendicular clash into the side of another word', () => {
        const testWord = {
          ...verticalWord,
          coordinates: [2, -2],
        };
        expect(checkClash(testWord, [horizontalWord])).toBe(true);
      });
    });
    describe('near clashes', () => {
      it('fails when there is a parallel word that ends before', () => {
        const testWord = {
          ...horizontalWord,
          coordinates: [4, 0],
        };
        expect(checkClash(testWord, [horizontalWord])).toBe(true);
      });
      it('fails when there is a perpendicular word starting at the end', () => {
        const testWord = {
          ...verticalWord,
          coordinates: [4, -1],
        };
        expect(checkClash(testWord, [horizontalWord])).toBe(true);
      });
      it('fails when there is a parallel word adjacent', () => {
        const testWord = {
          ...horizontalWord,
          coordinates: [0, 1],
        };
        expect(checkClash(testWord, [horizontalWord])).toBe(true);
      });
    });
  });
});
