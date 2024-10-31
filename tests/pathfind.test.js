const pathfind = require('../oxbury-pathfinder.js');

//using the example provided
describe('Pathfinding Algorithm', () => {
    test('should find the shortest path from P to Q', () => {
        const A = [
            [true, true, true, true, true],
            [true, false, false, false, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true]
        ];
        const P = [0, 1]; 
        const Q = [3, 2]; 

        expect(pathfind(A, P, Q)).toBe(6); 
    });

    test('should return null if no path exists', () => {
        const A = [
            [true, true, true, true, true],
            [false, false, false, false, false],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true]
        ];
        const P = [0, 1]; 
        const Q = [3, 2]; 

        expect(pathfind(A, P, Q)).toBeNull();
    });
});
