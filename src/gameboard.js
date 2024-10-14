class Board{
    constructor(){
        this.board = [
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
        ]
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
        let prev
        let dir
        for(let i = 0;i < cords.length;i++){
            let cor = cords[i]
            if(cor[0] > 8 || cor[0] < 0 || cor[1] > 8 || cor[1] < 0){
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
        return false
    }
    recieveAttack(cord){
        if(this.board[cord[1]][cord[0]] !== ''){
            this.board[cord[1]][cord[0]].isHit()
            if(this.board[cord[1]][cord[0]].sank){
                return true
            }
        }else{
            this.board[cord[1]][cord[0]] = "O"
        }
        return false
    }
}

module.exports = Board