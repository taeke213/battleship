let cordslist = []
export function compattack(){
    let cord = makenums()
    cordslist.push(cord)
    return cord
}
function makenums(){
    
    let cord
    let s = false
    while(!s){
        let x = Math.floor(Math.random() * 9) 
        let y = Math.floor(Math.random() * 9)
        cord = [y,x]
        s = checkcord(cord)
        console.log(s)
    }
    cordslist.push(cord)
    return cord
}
function checkcord(cord){
    let good = true
    cordslist.forEach(n => {
        if(n[0] === cord[0] && n[1] === cord[1]){
            good = false
        }
    })
    return good
}