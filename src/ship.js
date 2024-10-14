class Ship{
    constructor(n){
        {
            this.shiplength = n,
            this.hits = 0,
            this.sank = false
        }
    }
    isHit(){
        this.hits += 1
        this.isSank()
        return this
    }
    isSank(){
        if(this.hits === this.shiplength){
            this.sank = true
        }
    }
}


module.exports = {
    Ship
}