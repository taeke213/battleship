import "./index.css"
import {Ship} from "./ship.js"
import Board from "./gameboard.js"
import { game } from "./game.js"
import './createBord.js'
import { createBoard } from "./createBord.js"



export let gamevar = new game()
createBoard(document.getElementById("player1"),gamevar.player1.name)
createBoard(document.getElementById("player2"),gamevar.player2.name)

for(let count = 1; count < 6; count++){
    let list = []
    for(let i = 0; i < count; i++){
        list.push([count,i])
    }
    gamevar.player1.board.place(list, new Ship(count,list))
}

for(let count = 1; count < 6; count++){
    let list = []
    for(let i = 0; i < count; i++){
        list.push([count,i])
    }
    gamevar.player2.board.place(list, new Ship(count,list))
}
console.log(gamevar)
