/*pathfinding algorithims usually follow the same principle of from the start point recurisvely checking adjacent positions
My implementation is broadly as follows 
-checking possible next moves
-adding these next moves to a queue to be checked
-are you at the end point?
    if not then remove item from queue, check next item in queue, which should be sorted by distance
    if yes then return best distance
*/

const pathfind = (A, P, Q) => {

    const noOfRows = A.length;
    const noOfColumns = A[0].length;
    const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    //also want to include the distance 
    let queue = [[P[0], P[1], 0]];
    let visited = []

    const validMove = (x, y) => {
        //has it been visited
        if (!visited.some(pos => pos[0] === x && pos[1] === y)) {
            //is it on the board
            if ((x >= 0 && x < noOfRows) && (y >= 0 && y < noOfColumns)) {
                //is it passable
                if (A[x][y] )
                    return true
            }
            else {
                return false
            }
        }
    }

    //keep looping through the queue until we find a solution
    while (queue.length > 0) {
        //remove item to be checked from queue
        let currentCheck = queue[0];
        queue.shift();

        // is this the end?
        if (currentCheck[0] === Q[0] && currentCheck[1] === Q[1]) {
            //yes great we found the quickest way
            console.log("quickest way is ", currentCheck)
            return currentCheck[2]
        } else {
            //add to visited
            visited.push([currentCheck[0], currentCheck[1]]);

            //loop through the 4 directions and check if they're valid
            moves.forEach((move) => {
                const newX = currentCheck[0] + move[0];
                const newY = currentCheck[1] + move[1];

                if (validMove(newX, newY)) {
                    // Add to queue with updated distance
                    queue.push([newX, newY, currentCheck[2] + 1]);
                }   
            })
        }
    }
    //otherwise it couldn't find a solution
    console.log("couldn't find a solution!")
    return null;

}



//data from the example 
const A = [
    [true, true, true, true, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
];
const P = [0, 1]; 
const Q = [3, 2]; 

pathfind(A, P, Q)

module.exports = pathfind;