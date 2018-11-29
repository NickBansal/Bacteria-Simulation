# Capsule CRM application 
This is my application for Capsule CRM. The exercise was to create 'Game of Life' style code in Javascript. 

The following rules needed to be applied:
* Any live bacteria cell with fewer than two live neighbours dies, as if caused by under-population
* Any live bacteria cell with two or three live neighbours lives on to the next generation.
* Any live bacteria cell with more than three live neighbours dies, as if by overcrowding.
* Any dead bacteria cell with exactly three live neighbours becomes a live bacteria cell, as if by reproduction.

This sprint is set up using Javascript in Visual Studio Code and testing is done with Mocha and Chai.

## Step-by-step
- [x] Calculate the amount of neighbours each coordinate has
- [x] If a cell has less then two neighbours, it dies
- [x] If a cell has 2 or 3 neighbours it lives
- [x] If a cell has more then 4 neighbours it dies 
- [x] Any dead cell with exactly three live neighbours becomes a live cell again
- [x] Return a new array with live and regenerated cells only
