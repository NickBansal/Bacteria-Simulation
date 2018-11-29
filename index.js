const capsule = (grid) => {
    const result = []
    for (let i = 0; i < grid.length; i++) {
        let newGrid = grid.slice()
        result.push(checkAmountOfNeighbours(newGrid.splice(i, 1), newGrid))
    }
    return grid.filter((item, index) => result[index] === 2 || result[index] === 3)
}

const checkAmountOfNeighbours = (singleCell, remainingCells)  => {
    let neighbours = 0
    const checker = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]
    checker.forEach(item => {
        let newArray = []
        newArray.push(item[0] + singleCell[0][0], item[1] + singleCell[0][1])
        if (remainingCells.some(eachItem => eachItem[0] === newArray[0] && eachItem[1] === newArray[1])) {
            neighbours++
        }
    })
    return neighbours
}




module.exports = {
    capsule,
    checkAmountOfNeighbours
}

