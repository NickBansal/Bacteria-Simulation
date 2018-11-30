const { printNextGeneration } = require('./src/utils')
const grid = []

process.stdout.write('\nPlease enter all your coordinates below, followed by \'end\'\n\n')
process.stdin.on('data', (data) => {
    const newData = data.toString().trim()
    newData.toLowerCase() === 'end' ? printNextGeneration(grid) : grid.push(newData)
})
