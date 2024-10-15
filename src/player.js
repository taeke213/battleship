import Board from './gameboard.js'
import { Ship } from './ship.js'

export class player{
    constructor(name){
        this.name = name
        this.board = new Board()
        this.sank = 0
    }
    attack(cords){
        console.log(cords)
        if(cords.length === 0 || cords.length > 2|| Array.isArray(cords[0])){return false}
        console.log("a")
        let x = this.board.recieveAttack(cords)
        if(x === true){
            this.sank += 1
        }
        return this.allShipSank()
    }
    allShipSank(){
        if(this.sank === 5){
            return true
        }
        return false
    }
}

