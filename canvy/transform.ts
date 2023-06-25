import { Canvy } from "./canvy.ts";

export class CanvyTransform {
  scale(this: Canvy, x: number, y: number) {
    this.ctx.scale(x, y);
  }
}
