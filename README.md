# Bacteria Simulation
This exercise creates 'Game of Life' code in Javascript. 

The following rules needed to be applied:
* Any live bacteria cell with fewer than two live neighbours dies, as if caused by under-population
* Any live bacteria cell with two or three live neighbours lives on to the next generation.
* Any live bacteria cell with more than three live neighbours dies, as if by overcrowding.
* Any dead bacteria cell with exactly three live neighbours becomes a live bacteria cell, as if by reproduction.

This sprint is set up using Javascript in Visual Studio Code and testing is done with Mocha and Chai.

## Step-by-step
- [x] Calculate the amount of neighbours each cell has
- [x] If a cell has less then two neighbours, it dies
- [x] If a cell has 2 or 3 neighbours it lives
- [x] If a cell has more then 4 neighbours it dies 
- [x] Any dead cell with exactly three live neighbours becomes a live cell again
- [x] Return a new array with live cells only
- [x] Completed with standard input
- [x] Showcase on standard output

## Instructions
In order to get this working on your local machine please check if node is installed by typing this command into your terminal
```js
$ node -v
```
and then duplicate or fork this repository from https://github.com/NickBansal/Bacteria-Simulation


Inside this new directory, install the required NPM packages:
```js
$ npm install
```
Whilst in the main directory, in the terminal run the following command
```js
$ node index
```
The terminal will then instruct you to input coordinates followed by 'end'

Input a coordinate and hit enter - input as many coordinates as you like - all irregular coordinates will be discounted.

Finally the output will be shown in the terminal followed by 'end'

## Author
Nick Bansal 
