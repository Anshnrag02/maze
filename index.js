const {Engine, Render, Runner, World, Bodies,MouseConstraint,Mouse} = Matter;

const width =800;
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
for(let i = 0; i< 100 ; i++){

    const shape = Bodies.rectangle(width*Math.random(),height*Math.random(),100*Math.random(),100*Math.random(),{
        isStatic: false,
    });
    
    World.add(world,shape);
    

}

World.add(
    world,
    MouseConstraint.create(engine,{
        mouse: Mouse.create(render.canvas) 
    })
)

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