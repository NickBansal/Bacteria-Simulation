const { printNextGeneration } = require('./src/utils')
const grid = []

process.stdout.write('Please enter all your coordinates below, followed by \'end\'\n\n')
process.stdin.on('data', (data) => {
    const newData = data.toString().trim()
    newData.toLowerCase() === 'end' ? printNextGeneration(grid) : grid.push(newData)
})
