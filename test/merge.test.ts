import { merge } from '../src/merge';

describe('merge()', () => {
    it('should merge three sorted arrays correctly', () => {
        const c1 = [1, 3, 5];
        const c2 = [6, 4, 2];
        const c3 = [0, 7, 8];

        expect(merge(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle negative numbers', () => {
        const c1 = [-3, -1, 0];
        const c2 = [6, 4, 2];
        const c3 = [-6, -4, -2];
        
        expect(merge(c1, c2, c3)).toEqual([-6, -4, -3, -2, -1, 0, 2, 4, 6]);
    });

    it('should handle arrays of different lengths', () => {
        const c1 = [1, 3];
        const c2 = [6, 5, 4, 2];
        const c3 = [0, 7, 8];

        expect(merge(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should work with empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2], [], [])).toEqual([1, 2]);
        expect(merge([], [2, 1], [])).toEqual([1, 2]);
    });

    it('should be able to handle duplicates', () => {
        expect(merge([1, 2], [2, 1], [1, 3])).toEqual([1, 1, 1, 2, 2, 3]);
    });
});
