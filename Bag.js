class Bag {
    static MAX_WEIGHT = 23;

    constructor(weight) {
        if (!weight) {
            throw new Error('bag needs weight');
        }

        if (weight > Bag.MAX_WEIGHT) {
            throw new Error(`bag weight cannot exceed ${Bag.MAX_WEIGHT}kg`);
        }

        this.weight = weight;
    }
}

module.exports = Bag