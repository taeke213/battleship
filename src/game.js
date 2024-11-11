import { player } from "./player"
import "./computer-geuss.js"
import { compattack } from "./computer-geuss.js"

export class game{
    constructor(){
        this.player1 = new player("player1"),
        this.player2 = new player("player2"),
        this.turn = this.player1
    }
    attack(cord){
        let x = this.turn.attack(cord)
        console.log(this.turn)
        if(x === true){
            this.turn.sank += 1
            this.allSank()
        }
        if(this.turn === this.player1){
            this.turn = this.player2
        }else if(this.turn === this.player2){
            this.turn = this.player1
        }
        if(this.turn === this.player2){
            let compcords = compattack()
            this.turn.attack(compcords)
            this.turn = this.player1
        }
        
    }
    allSank(){
        if(this.turn.sank === 5){
            document.getElementById(this.turn.name).style.backgroundColor = "aqua"
            return true
        }
        return false
    }
}
