import { player } from "./player"

export class game{
    constructor(){
        this.player1 = new player("1"),
        this.player2 = new player("2"),
        this.turn = this.player1
    }
    attack(cord){
        let x = this.turn.attack(cord)
        
        if(x === true){
            this.turn.sank += 1
            this.allSank()
        }
        if(this.turn === this.player1){
            this.turn = this.player2
        }else{
            this.turn = this.player1
        }

    }
    allSank(){
        if(this.turn.sank === 5){
            return true
        }
        return false
    }
}
