controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (inAir == false) {
        player1X = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x
        player1Y = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y
        player2X = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x
        player2Y = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(player1X, player1Y)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(player2X, player2Y)
        if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).isHittingTile(CollisionDirection.Bottom)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -190
            jump = 1
        } else {
            jump = -1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.gameOver(false)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (inAir == false) {
        player1X = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x
        player1Y = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y
        player2X = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x
        player2Y = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(player1X, player1Y)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(player2X, player2Y)
        if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).isHittingTile(CollisionDirection.Bottom)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -190
            jump = 1
        } else {
            jump = -1
        }
    }
})
let jump = 0
let what = 3
let player2Y = 0
let player2X = 0
let player1Y = 0
let player1X = 0
let inAir = false
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . b 7 b . . . 
    . . . . . . . . . b 7 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 7 7 7 7 7 b . . . 
    . . . . b b 7 d 1 f 7 d 4 c . . 
    . . . . b 7 7 1 f f d d 4 4 4 b 
    . . . . b 7 7 d f b 4 4 4 4 b . 
    . . . b d 7 7 7 7 4 4 4 4 b . . 
    . b b d d d 7 7 7 7 7 7 7 b . . 
    b d d d b b b 7 7 7 7 7 7 7 b . 
    c d d b 7 7 d c 7 7 7 7 7 7 b . 
    c b b d 7 d c d 7 7 7 7 7 7 b . 
    c b 7 7 b c d d 7 7 7 7 7 7 b . 
    b b c c c d d d 7 7 7 7 7 d b . 
    . . . . c c d d d 7 7 7 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(1, 3))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(1, 7))
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx = 100
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vx = 100
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 500
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
inAir = false
game.onUpdateInterval(1, function () {
    if (jump >= 1) {

    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = 10
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = 10
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).isHittingTile(CollisionDirection.Bottom) && mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).isHittingTile(CollisionDirection.Bottom)) {
        inAir = false
    } else {
        inAir = true
    }
})
