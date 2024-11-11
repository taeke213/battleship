import './bundle.js'
import { gamevar } from './bundle.js'
export function createBoard(board, player){
    for(let rowi = 0;rowi < 8; rowi++){
        let div = document.createElement("div")
        div.id = `${rowi}`
        for(let coli = 0; coli < 8; coli++){
            let block = document.createElement("div")
            block.id = `[${rowi},${coli}]`
            let but = document.createElement("div")
            but.addEventListener(("click"), () => {
                console.log(gamevar.turn.name)
                if(gamevar.turn.name === player){
                let a = block.id.split("")
                console.log(a)
                let i = []
                i.push(a[3])
                i.push(a[1])
                console.log(i)
                let attack = gamevar.attack(i)

                block.removeChild(but)
                }
            })
            but.classList.add("block-but")
            block.appendChild(but)
            div.appendChild(block)
        }
        board.appendChild(div)
    }
}