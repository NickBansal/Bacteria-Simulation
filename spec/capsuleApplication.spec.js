const { expect } = require('chai')
const capsule = require('../')

describe('Capsule Application - Bacteria', () => {
    it('Returns an empty array when passed an empty array', () => {
        expect(capsule([])).to.eql([])
    })
    // Checking for the amount of neighbours
    it.only('Returns the amount of neighbours of each cell', () => {
        expect(capsule([[1, 2], [1, 3], [1, 4]])).to.equal(1)
    })
})