import './bundle.js'
import { gamevar } from './bundle.js'
export function createBoard(board){
    for(let rowi = 0;rowi < 8; rowi++){
        let div = document.createElement("div")
        div.id = `${rowi}`
        for(let coli = 0; coli < 8; coli++){
            let block = document.createElement("div")
            block.id = `[${rowi},${coli}]`
            let but = document.createElement("div")
            but.addEventListener(("click"), () => {
                let a = block.id.split("")
                console.log(a)
                let i = []
                i.push(a[3])
                i.push(a[1])
                let attack = gamevar.attack(i)
                console.log(attack)
                if(attack){
                    block.style.backgroundColor = "green"
                }else{
                    block.style.backgroundColor = "red"
                }
                block.removeChild(but)
            })
            but.classList.add("block-but")
            block.appendChild(but)
            div.appendChild(block)
        }
        board.appendChild(div)
    }
}