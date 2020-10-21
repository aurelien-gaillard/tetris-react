export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => {
    return (
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0,'clear'])
    ))
}

// return True if collision is detected. else return false.
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y=0 ; y< player.tetromino.length ; y++ ) {
        for (let x=0 ; x<player.tetromino[y].length; x++ ) {
            // check that we are in a occupy cell of our tetromino array
            if (player.tetromino[y][x] !== 0) {
                if (
                //check the move is inside stage for bottom area
                !stage[y + player.pos.y + moveY] ||
                // check the move is inside the horizontal area of the stage.
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                // check that the cell were are moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'                
                )
                {
                    return true;
                }
            }
        }
    }
}