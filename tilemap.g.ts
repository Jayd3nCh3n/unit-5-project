// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`22000900010303030303030303030303030303030303030303030303030303030303030303030200000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000020000000000000600000000000000000000000000000000000000000006000000000104040404040404040404040404040404040404040404040404040404040404040402000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000060000000000000000000000000001050505050505050505050505050505050505050505050505050505050505050505`, img`
2222222222222222222222222222222222
2.................................
2.................................
2.................................
2222222222222222222222222222222222
2.................................
2.................................
2.................................
2222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath8,myTiles.tile1,sprites.castle.tilePath2,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile4":return tile4;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
