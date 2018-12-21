const { expect } = require('chai')
const sinon = require('sinon')
const { 
    formulateGrid, 
    checkAmountOfNeighbours, 
    regenerateCells,
    printNextGeneration
} = require('../src/utils')

const grid1 = [[1, 2], [1, 3], [1, 4]]
const grid2 = [[2, 2], [2, 3], [3, 2], [3, 3]]
const grid3 = [[1, 2], [1, 3], [1, 4], [1, 5]]
const remainingCells = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 2]]
const sortArrayValues = (a, b) => a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1]

describe('Bacteria Simulation', () => {
    it('Returns an empty array when passed an empty array', () => {
        expect(formulateGrid([])).to.eql([])
    })
    
    // Checking the amount of neighbours for each cell 
    it('Returns the amount of neighbours of a specified cell', () => {
        expect(checkAmountOfNeighbours([0, 0], remainingCells)).to.equal(0)
        expect(checkAmountOfNeighbours([1, 0], remainingCells)).to.equal(1)
        expect(checkAmountOfNeighbours([1, 1], remainingCells)).to.equal(3)
        expect(checkAmountOfNeighbours([2, 3], remainingCells)).to.equal(4)
    })
    
    // Compare arrays within arrays and sort
    it('Compare arrays within arrays and sort then into order', () => {
        const array1 = [[1, 3], [1, 1], [1, 2]]
        const array2 = [[0, 3], [0, 11], [0, 2]]
        const array3 = [[3, 2], [3, 3], [2, 2], [2, 3]]
        
        expect(array1.sort(sortArrayValues)).to.eql([[1, 1], [1, 2], [1, 3]])
        expect(array2.sort(sortArrayValues)).to.eql([[0, 2], [0, 3], [0, 11]])
        expect(array3.sort(sortArrayValues)).to.eql([[2, 2], [2, 3], [3, 2], [3, 3]])
    })
  
    // Calculates the regeneration of dead cells
    it('Cell regeneration to regenerate dead cells with 3 live neighbours', () => {
        const answer = [[0, 3], [0, 4], [2, 3], [2, 4]]
        expect(regenerateCells(grid1)).to.eql([[0, 3], [2, 3]])
        expect(regenerateCells(grid2)).to.eql(grid2)
        expect(regenerateCells(grid3)).to.eql(answer)
    })

    // Final bacteria result
    it('An input will return a new array of live cells', () => {
        const answer = [[0, 3], [1, 3], [2, 3]]
        expect(formulateGrid(grid1)).to.eql(answer)
        expect(formulateGrid(grid2)).to.eql(grid2)

        const finalQuestion2 = [[1, 2], [2, 2], [3, 2], [1000000001 ,1000000002], [1000000002 ,1000000002], [1000000003 ,1000000002]]
        const finalAnswer2 = [[2, 1], [2, 2], [2, 3], [1000000002 ,1000000001], [1000000002 ,1000000002], [1000000002 ,1000000003]]
        expect(formulateGrid(finalQuestion2)).to.eql(finalAnswer2)

        const finalQuestion1 = [[2, 1], [2, 2], [2, 3], [1000000002 ,1000000001], [1000000002 ,1000000002], [1000000002 ,1000000003]]
        const finalAnswer1 = [[1, 2], [2, 2], [3, 2], [1000000001 ,1000000002], [1000000002 ,1000000002], [1000000003 ,1000000002]]
        expect(formulateGrid(finalQuestion1)).to.eql(finalAnswer1)
    })

    it('Should call the printNextGeneration function', () => {
        const consoleSpy = sinon.spy(console, 'log')
        const grid = [ '1, 2', '1, 3', '1, 4' ]
        console.log(printNextGeneration(grid))
    })
})