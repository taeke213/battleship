class Ship{
    constructor(n, cords){
        {
            this.shiplength = n,
            this.hits = 0,
            this.sank = false
            this.cords = cords 
        }
    }
    isHit(){
        this.hits += 1
        if(this.isSank()){return true}
        return false
    }
    isSank(){
        if(this.hits === this.shiplength){
            this.sank = true
            return true
        }
    }
}


module.exports = {
    Ship
}