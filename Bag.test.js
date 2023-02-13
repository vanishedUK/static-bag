const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(20)
        expect(bag.weight).toBe(20)
    });
    
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    });

    test('should throw error if weight exceeds MAX_WEIGHT', () => {
        expect(() => new Bag(25)).toThrowError(`bag weight cannot exceed ${Bag.MAX_WEIGHT}kg`);
    });

    test('should create a bag instance with weight equal to 20', () => {
        const bag = new Bag(20);
        expect(bag.weight).toBe(20);
    });
})