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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`23001100010303030303030303030303030303030303030303030303030303030303030303030002000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000800000000000000000002090000000000000006000000000000000000000000000000080000000000000000000104040404040404040404040404040404040404040404040404040404040404040400020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000020a0000000000000000000000000000000000000700000000000000000000000000000105050505050505050505050505050505050505050505050505050505050505050500`, img`
2222222222222222222222222222222222.
2..................................
2..................................
2..................................
2..................................
2..................................
2........................2.........
2........2...............2.........
2222222222222222222222222222222222.
2..................................
2..................................
2..................................
2..................................
2..................................
2..................................
2...................2..............
2222222222222222222222222222222222.
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath8,myTiles.tile1,sprites.castle.tilePath2,sprites.swamp.swampTile3,sprites.castle.rock0,sprites.dungeon.floorLight0,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
