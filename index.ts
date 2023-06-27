import { Canvy } from "./src/canvy.ts";

export function TESTER(canvas?: HTMLCanvasElement) {
  if (!canvas) return;
  let x = 0;
  const cvy = new Canvy(canvas);
  cvy.height = window.innerHeight;
  cvy.width = window.innerWidth;
  cvy.draw = () => {
    cvy.ctx.fillStyle = "black";
    cvy.rect(0, 0, cvy.width, cvy.height);
    // console.log(cvy.width);
    cvy.fill(255, 20, 100);
    cvy.rect(cvy.mouseX, cvy.mouseY, 10, 10);
    cvy.rect(10, 10, 10, 10);

    console.log(cvy.mouseX, cvy.mouseY);
  };
  cvy.initiate();
}
