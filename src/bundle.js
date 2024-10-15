import "./index.css"
import {Ship} from "./ship.js"
import Board from "./gameboard.js"
import { game } from "./game.js"
import './createBord.js'
import { createBoard } from "./createBord.js"



export let gamevar = new game()
createBoard(document.getElementById("board1"))
console.log(gamevar.turn.board.place([[1,1],[1,2],[1,3]],new Ship(3)))
console.log(gamevar)
