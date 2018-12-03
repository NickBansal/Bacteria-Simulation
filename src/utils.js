const checker = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

const formulateGrid = (grid) => {
    const result = []
    for (let i = 0; i < grid.length; i++) {
        let newGrid = grid.slice()
        result.push(checkAmountOfNeighbours(newGrid.splice(i, 1)[0], newGrid))
    }
    const aliveCells = grid.filter((item, index) => result[index] === 2 || result[index] === 3)
    const regenCells = regenerateCells(grid)
    return removeDuplicates([...aliveCells, ...regenCells])
    .filter(item => item[0] >= 0 && item[1] >= 0).sort(sortArrayValues)
}

const checkAmountOfNeighbours = (singleCell, remainingCells)  => {
    let neighbours = 0
    checker.forEach(item => {
        let newArray = []
        newArray.push(item[0] + singleCell[0], item[1] + singleCell[1])
        if (remainingCells.some(eachItem => eachItem[0] === newArray[0] && eachItem[1] === newArray[1])) {
            neighbours++
        }
    })
    return neighbours
}

const regenerateCells = (grid) => {
    const result = []
    grid.forEach(cell => {
        checker.forEach(item => {
            const newArray = []
            newArray.push(item[0] + cell[0], item[1] + cell[1])
            if ((checkAmountOfNeighbours(newArray, grid)) === 3) {
                result.push(newArray)
            }
        })
    })
    return removeDuplicates(result).sort(sortArrayValues)
}

const sortArrayValues = (a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
    }
    return 0;
}

const printNextGeneration = grid => {
    process.stdout.write(`\n`)
    const outerArray = []
    grid.forEach(item => {
        outerArray.push(item.split(',').map(Number))
    })
    formulateGrid(outerArray).forEach(item => {
        const newString = `${item[0]}, ${item[1]}`
        process.stdout.write(`${newString}\n`)
    })
    process.stdout.write('end\n\n')
    process.exit()
}

const removeDuplicates = array => array.map(JSON.stringify)
.reverse()
.filter((value, index, array) => array.indexOf(value, index + 1) === -1)
.reverse()
.map(JSON.parse)

module.exports = {
    formulateGrid,
    checkAmountOfNeighbours,
    regenerateCells,
    sortArrayValues, 
    removeDuplicates, 
    printNextGeneration
}