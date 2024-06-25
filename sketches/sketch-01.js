const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080,1080]

};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let x = 100;
    let y = 100;
    let h = 60;
    let w = 60;
    let gap = 20;
    context.lineWidth = 2;


    
    for(let i = 0;i<5;i++){
      for(let j = 0;j<5;j++){
        let X = x+(w+gap)*i
        let Y = y+(h+gap)*j
        context.beginPath();
        context.rect(X,Y,w,h);
        context.stroke()

        if(Math.random()>0.5){
            context.beginPath()
            context.rect(X+8,Y+8,w-16,h-16)
            context.stroke()
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
