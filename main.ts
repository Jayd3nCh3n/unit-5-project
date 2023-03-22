mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function on_button_multiplayer_a_pressed(player2: mp.Player) {
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
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player2_button_a_pressed() {
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
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
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
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
})
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
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
