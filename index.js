const { capsule } = require('./src/bacteria')
const grid = []

process.stdout.write(`\n      ******************************************\n`)
process.stdout.write('Please enter all your coordinates below, followed by \'end\'\n\n')
process.stdin.on('data', (data) => {
    const newData = data.toString().trim()
    newData.toLowerCase() === 'end' ? process.exit() : grid.push(newData)
})
process.on('exit', () => {
    process.stdout.write(`\n`)
    const outerArray = []
    grid.forEach(item => {
        outerArray.push(item.split(',').map(Number))
    })
    capsule(outerArray).forEach(item => {
        const newString = `${item[0]}, ${item[1]}`
        process.stdout.write(`${newString}\n`)
    })
    process.stdout.write('end\n\n')
})