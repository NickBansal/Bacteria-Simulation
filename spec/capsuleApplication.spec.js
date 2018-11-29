const { expect } = require('chai')
const { capsule, checkAmountOfNeighbours } = require('../')

const remainingCells = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 2]]

describe('Capsule Application - Bacteria', () => {
    it('Returns an empty array when passed an empty array', () => {
        expect(capsule([])).to.eql([])
    })
    
    // Checking the amount of neighbours for each cell 
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [[0, 0]]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).to.equal(0)
    })
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [[1, 0]]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).to.equal(1)
    })
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [[1, 1]]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).to.equal(3)
    })
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [[2, 3]]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).to.equal(4)
    })

    // Checking if a cell has less then two neighbours and deleting them if so
    it('Only returns the cells that have 2 or more neighbours', () => {
        expect(capsule([[1,2], [1, 3], [1, 4]])).to.eql([[1, 3]])
    })
    it('Only returns the cells that have 2 or more neighbours', () => {
        const liveCells = [[1, 2], [3, 3], [8, 9]]
        expect(capsule(liveCells)).to.eql([])
    })
    it('Only returns the cells that have 2 or more neighbours', () => {
        const liveCells = [[1,2], [1, 3], [1, 4], [8, 9]]
        expect(capsule(liveCells)).to.eql([[1, 3]])
    })
    it('Only returns the cells that have 2 or more neighbours', () => {
        const liveCells = [[1, 3], [1, 4], [1, 5], [8, 9]]
        expect(capsule(liveCells)).to.eql([[1, 4]])
    })

    // If the cell has 2 or 3 live neighbours it lives
    it('Only returns the cells that have exactly 2 or 3 neighbours', () => {
        const liveCells = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7] ]
        expect(capsule(liveCells)).to.eql([[1, 3], [1, 4], [1, 5], [1, 6]])
    })
    it('Only returns the cells that have exactly 2 or 3 neighbours', () => {
        const liveCells = [[1, 2], [1, 3], [1, 4], [2, 4]]
        expect(capsule(liveCells)).to.eql([[1, 3], [1, 4], [2, 4]])
    })
    it('Only returns the cells that have exactly 2 or 3 neighbours', () => {
        const liveCells = [[1, 2], [1, 3], [2, 2], [2, 3]]
        expect(capsule(liveCells)).to.eql(liveCells)
    })
    
    // Checking if a cell has more then three neighbours and deleting them if so
    it('Cells with less then two neighbours and more then 3 will die', () => {
        const liveCells = [[1, 2], [1, 3], [1, 4], [2, 2], [2, 3], [2, 4]]
        expect(capsule(liveCells)).to.eql([[1, 2], [1, 4], [2, 2], [2, 4]])
    })
    it('Cells with less then two neighbours and more then 3 will die', () => {
        const liveCells = [[1, 2], [1, 3], [1, 4], [1, 5], [2, 2], [2, 3], [2, 4], [2, 5]]
        expect(capsule(liveCells)).to.eql([[1, 2], [1, 5], [2, 2], [2, 5]])
    })
})