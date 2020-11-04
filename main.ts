scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    info.changeScoreBy(3)
    music.powerUp.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    info.changeScoreBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
info.onCountdownEnd(function () {
    game.over(false, effects.blizzard)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f 8 8 8 . . . . 
    . . . . . f f 7 7 7 7 7 f . . . 
    . f f 8 8 f 7 7 7 7 7 7 7 f . . 
    . f 6 7 f 7 7 7 7 7 7 7 7 8 . . 
    . . f 7 7 f 7 6 1 f 7 6 4 f . . 
    . . f 6 7 7 f 1 f f 7 4 5 8 . . 
    f f e f 7 7 7 6 f 6 5 5 5 5 5 f 
    f e e 8 6 7 7 f 7 5 5 5 5 5 f . 
    c e e e 8 8 f 7 7 7 7 7 7 7 8 . 
    c e e e e e e 7 7 7 7 7 7 7 8 . 
    . c e e e e e e 7 7 7 7 7 6 f . 
    . . c e e e e e e 7 7 7 f f . . 
    . . . c c c c c c 8 8 f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass3)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
info.setScore(0)
