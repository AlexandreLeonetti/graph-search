# Graph Search implemented on 2D matrix using TypeScript. 

> graph search implemented on 2D matrix using TypeScript. 

## Install

```sh

npm install @leonetti/graph-search

```

## Usage

```js

import {mazeSearch} from '@leonetti/graph-search';


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

mazeSearch(maze, start, end);

```
