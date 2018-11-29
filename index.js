const checker = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

const capsule = (grid) => {
    const result = []
    for (let i = 0; i < grid.length; i++) {
        let newGrid = grid.slice()
        result.push(checkAmountOfNeighbours(newGrid.splice(i, 1)[0], newGrid))
    }
    const aliveCells = grid.filter((item, index) => result[index] === 2 || result[index] === 3)
    const regenCells = regenerateCells(grid)
    const newBacteria = [...aliveCells, ...regenCells]
    const total = Array.from(new Set(newBacteria.map(JSON.stringify)), JSON.parse)
    return total.sort(Comparator)
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
    const total = Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
    return total.sort(Comparator)
}

const Comparator = (a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
    }
    return 0;
  }

module.exports = {
    capsule,
    checkAmountOfNeighbours,
    regenerateCells,
    Comparator
}

