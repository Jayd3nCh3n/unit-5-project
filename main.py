 def on_player2_button_a_pressed():
    global jump, player1X, player1Y, player2X, player2Y
    jump = 1
    player1X = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).x
    player1Y = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).y
    player2X = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).x
    player2Y = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).y
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_position(player1X, player1Y)
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_position(player2X, player2Y)
    if mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).is_hitting_tile(CollisionDirection.BOTTOM):
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).vy = -190
        jump = 1
    else:
        jump = -1
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_overlap_tile(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def on_player1_button_a_pressed():
    global player1X, player1Y, player2X, player2Y, jump
    player1X = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).x
    player1Y = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).y
    player2X = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).x
    player2Y = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).y
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_position(player1X, player1Y)
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_position(player2X, player2Y)
    if mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).is_hitting_tile(CollisionDirection.BOTTOM):
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).vy = -190
        jump = 1
    else:
        jump = -1
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

player2Y = 0
player2X = 0
player1Y = 0
player1X = 0
jump = 0
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
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
tiles.place_on_tile(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
    tiles.get_tile_location(1, 3))
tiles.place_on_tile(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)),
    tiles.get_tile_location(1, 7))
tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 4))
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).vx = 75
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).vx = 75
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).ay = 400
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).ay = 400
mySprite.vx = 75
scene.camera_follow_sprite(mySprite)

def on_update_interval():
    if jump >= 1:
        pass
    else:
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).vy = 15
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).vy = 15
game.on_update_interval(1, on_update_interval)
