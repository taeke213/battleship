import { findcolor } from './color.js'

export class Board{
    constructor(playername){
        this.board = [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
        ]
        this.html = document.getElementById(playername)
    }
    place(cords = [],boat){
    if(cords.length !== boat.shiplength || this.checkcords(cords)){
        console.log(cords)
        return "af"}
    cords.forEach(cor => {
            this.board[cor[1]][cor[0]] = boat
    })

    }
    checkcords(cords){
        console.log(cords)
        let prev
        let dir
        if(cords.length === 1){
            let cor = cords[0]
            if(cor[0] > 10 || cor[0] < 0 || cor[1] > 10 || cor[1] < 0){
                return true
            }
            return false
            
        }
        for(let i = 0;i < cords.length;i++){
            
            let cor = cords[i]
            if(cor[0] > 10 || cor[0] < 0 || cor[1] > 10 || cor[1] < 0){
                return false
            }
            if(prev !== undefined && dir === undefined){
                if(prev[0] !== cor[0]){
                    if(dir === undefined || dir === 0){
                        dir = 0
                    }
                    else{
                        return true
                    }
                }
                if(prev[1] !== cor[1]){
                    if(dir === undefined || dir === 1){
                        dir = 1
                    }else{
                        return true
                    }
                }
            }
            if(prev !== undefined){
                if(dir === 0 && prev[1]- cor[1] > 2 && prev[1]-cor[1] < -2){
                    return true
                }
                if(dir === 1 && prev[0] - cor[0] > 2 && prev[0] - cor[0] < -2){
                    return true
                }
            }
            prev = cor
        }
        if(dir === undefined){
            return true
        }
        console.log("1")
        return false
    }
    recieveAttack(cord){
        let y = Number(cord[1])
            let x = Number(cord[0])
            let nodes =  this.html.childNodes
            let nodelist = nodes[y].childNodes
            console.log(nodelist)
            
            console.log(x)
        if(this.board[y][x] !== '' && this.board[y][x] !== "O"){
            console.log(this.board[cord[1]][cord[0]])
            this.board[y][x].isHit()
            nodelist[x].style.backgroundColor = "green"
            if(this.board[cord[1]][cord[0]].sank){
                let ship = this.board[cord[1]][cord[0]]
                let color = findcolor(ship)
                ship.cords.forEach(cor => {
                    let f = nodes[cor[1]]
                    console.log(f)
                    f.childNodes[cor[0]].style.backgroundColor = color 
                })
                
                return true
            }
        }else{
            this.board[cord[1]][cord[0]] = "O"
            nodelist[x].style.backgroundColor = "red"
        }
        console.log(this.board)
        return false
    }
}
