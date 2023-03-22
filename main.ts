game.gameOver(true)
let mySprite = sprites.create(img`
    . . . . . . . . . . b b b . . .
    . . . . . . . . b e e 3 3 b . .
    . . . . . . b b e 3 2 e 3 a . .
    . . . . b b 3 3 e 2 2 e 3 3 a .
    . . b b 3 3 3 3 3 e e 3 3 3 a .
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
    b 3 3 3 d d d d 3 3 3 3 3 d d a
    b b b b b b b 3 d d d d d d 3 a
    b d 5 5 5 5 d b b b a a a a a a
    b 3 d d 5 5 5 5 5 5 5 d d d d a
    b 3 3 3 3 3 3 d 5 5 5 d d d d a
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a
    b b b 3 d 5 5 5 5 5 5 5 d d b a
    . . . b b b 3 d 5 5 5 5 d d 3 a
    . . . . . . b b b b 3 d d d b a
    . . . . . . . . . . b b b a a .
`, SpriteKind.Player)