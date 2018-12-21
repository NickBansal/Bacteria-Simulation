const checker = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

const formulateGrid = (grid) => {
    const newSet = new Set()
    const aliveCells = grid.filter(item => checkAmountOfNeighbours(item, grid) === 2 || checkAmountOfNeighbours(item, grid) === 3)
    const regenCells = regenerateCells(grid)

    const nextGenCells = [...aliveCells, ...regenCells]

    nextGenCells.forEach(item => {
        newSet.add(`${item[0]},${item[1]}`)
    })
    return [...newSet].map(item => item.split(',').map(Number))
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
    const newSet = new Set()
    grid.forEach(cell => {
        checker.forEach(item => {
            const newArray = []
            newArray.push(item[0] + cell[0], item[1] + cell[1])
            if ((checkAmountOfNeighbours(newArray, grid)) === 3) {
                result.push(newArray)
            }
        })
    })
    result.forEach(item => {
        newSet.add(`${item[0]},${item[1]}`)
    })
    return [...newSet].map(item => item.split(',').map(Number))
    .filter(item => item[0] >= 0 && item[1] >= 0).sort(sortArrayValues)
}

const sortArrayValues = (a, b) => a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1]

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

module.exports = {
    formulateGrid,
    checkAmountOfNeighbours,
    regenerateCells,
    sortArrayValues, 
    printNextGeneration
}