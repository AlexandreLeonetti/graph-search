/*
let's implement Depth First Search recursion to find path in a 2D matrix
containing obstacles
*/
/* maze */
const WHITE = 0;
const BLACK = 1;
/* define the maze */
const maze = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
];
/* define start and end points row column */
const start = { x: 0, y: 0 };
const end = { x: 9, y: 9 };
function mazeSearch(maze, s, e) {
    let path = [];
    function checker(p) {
        /* this function checks nodes just like in trees */
        /* check if current coords are white and within boundaries */
        /* if not return false */
        if (!((0 <= p.x && p.x < maze.length) && (0 <= p.y && p.y < maze[p.x].length))) {
            return false;
        }
        if (maze[p.x][p.y] === BLACK) {
            return false;
        }
        /* we check the value of the node after ensuring it is within boundaries.
         * note that && statements are evaluated from left to right;
         */
        /* add current node to path and mark as black*/
        path.push(p);
        maze[p.x][p.y] = BLACK;
        /* if we find the end, return true to indicate success */
        if (p.x == e.x && p.y == e.y) {
            return true;
        }
        /* recursively check neighboring coords */
        let neighbors = [{ x: p.x + 1, y: p.y }, { x: p.x - 1, y: p.y }, { x: p.x, y: p.y - 1 }, { x: p.x, y: p.y + 1 }];
        for (let n of neighbors) {
            if (checker(n)) {
                return true;
            }
        }
        /* if no path found */
        path.pop();
        return false;
    }
    if (!checker(s)) {
        return [];
    }
    return path;
}
console.log(mazeSearch(maze, start, end));
export {};
