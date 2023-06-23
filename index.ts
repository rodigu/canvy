import { Canvy } from "./canvy/canvy.ts";

export function TESTER(canvas?: HTMLCanvasElement) {
  if (!canvas) return;
  const cvy = new Canvy(canvas);
  cvy.height = 200;
  cvy.width = 200;
  cvy.fill(100, 120, 100);
  cvy.rect(20, 20, 20, 20);
}
