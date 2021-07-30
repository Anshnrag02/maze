const {Engine,
    Render,
    Runner,
    World,
    Bodies
} = Matter;

const width =600;
const height= 600;
 
const engine =Engine.create();
const {world}=engine;
const render=Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: width,
        height: height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// walls
const walls=[
    Bodies.rectangle(width/2,0,width,40, {
        isStatic: true,
    }),
    Bodies.rectangle(width/2,height,width,40, {
        isStatic: true,
    }),
    Bodies.rectangle(width,height/2,40,height, {
        isStatic: true,
    }),
    Bodies.rectangle(0,height/2,40,height, {
        isStatic: true,
    })
];
World.add(world,walls);

let rows =3;
let cols =3;

const grid = Array(rows)
.fill(null)
.map(() => Array(cols).fill (false) );

const verticals = Array(rows)
.fill(null)
.map(() => Array(cols-1).fill (false) );

const horizontals = Array(rows-1)
.fill(null)
.map(() => Array(cols-1).fill (false) );

const startRow = Math.floor(Math.random())*rows;
const startCol = Math.floor(Math.random())*cols;