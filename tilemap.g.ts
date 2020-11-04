// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`1000100001040102010101010101010101010103010001010101070101000900000802010100020103010001010001010101010101000000000000000000000000000001030102010101010101020201010100010100000000000001010301090101000101000101010100010101010001030001010001090000000108010100010100010100010201010001000102000101060101000101010100000000000000000001010000000102010101010101010200010201010001010101010101000000070101010100000007010103010002010302010103000201000008010100010801010500000007010101010101000000010101010101010201030201010101010102`, img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 . 2 2 . . . . . 2 2 
2 . 2 2 2 2 . 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . 2 2 2 2 . 2 2 . 2 
2 . 2 2 2 2 . 2 2 2 2 . 2 2 . 2 
2 . 2 . . . . 2 . 2 2 . 2 2 . 2 
2 . 2 2 2 2 . 2 . 2 2 . 2 2 . 2 
2 . 2 2 2 2 . . . . . . . . . 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 2 . 2 2 2 2 2 2 2 . . . . 2 
2 2 2 . . . . 2 2 2 2 . 2 2 2 2 
2 2 2 . 2 2 . . . 2 2 . 2 . 2 2 
. . . . . 2 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
