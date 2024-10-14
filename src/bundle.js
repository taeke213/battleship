import "./index.css"
import {Ship} from "./ship.js"
import Board from "./gameboard.js"
import { game } from "./game.js"
import './createBord.js'
import { createBoard } from "./createBord.js"

createBoard(document.getElementById("board1"))

let gamevar = new game()
console.log(gamevar.turn.board.place([[1,1],[1,2],[1,3]],new Ship(3)))
gamevar.attack([1,1])
gamevar.attack([1,2])
gamevar.attack([1,3])
console.log(gamevar)
