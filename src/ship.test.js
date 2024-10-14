const { Ship } = require('./ship.js')

test("1", () => {
    expect(new Ship(1).isHit()).toEqual({
        length:1,
        hits:1,
        sank:true
    })
})
