def on_button_multiplayer_a_pressed(player2):
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
        sprites.create(img("""
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
            """),
            SpriteKind.player))
    mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE))
mp.on_button_event(mp.MultiplayerButton.A,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_a_pressed)

def on_player2_button_a_pressed():
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
        sprites.create(img("""
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
            """),
            SpriteKind.player))
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_position(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).x,
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).y)
    sprites.destroy(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)))
    mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO))
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_player1_button_a_pressed():
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
        sprites.create(img("""
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
            """),
            SpriteKind.player))
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_position(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).x,
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).y)
    sprites.destroy(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)))
    mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO))
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE))