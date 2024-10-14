
export function createBoard(board){
    for(let rowi = 0;rowi < 8; rowi++){
        let div = document.createElement("div")
        div.id = `${rowi}`
        for(let coli = 0; coli < 8; coli++){
            let block = document.createElement("div")
            block.id = `[${rowi},${coli}]`
            block.textContent = block.id
            div.appendChild(block)
        }
        board.appendChild(div)
    }
}