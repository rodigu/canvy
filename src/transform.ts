import { Canvy } from "./canvy.ts";

export class CanvyTransform {
  scale(this: Canvy, x: number, y: number) {
    this.ctx.scale(x, y);
  }

  translate(this: Canvy, x: number, y: number) {
    this.ctx.translate(x, y);
  }

  transform(
    this: Canvy,
    horizontalScale: number,
    horizontalSkew: number,
    verticalSkew: number,
    verticalScale: number,
    horizontalMove: number,
    verticalMove: number
  ) {
    this.ctx.transform(
      horizontalScale,
      horizontalSkew,
      verticalSkew,
      verticalScale,
      horizontalMove,
      verticalMove
    );
  }

  rotate(this: Canvy, radians: number) {
    this.ctx.rotate(radians);
  }

  push(this: Canvy) {
    this.ctx.save();
  }

  pop(this: Canvy) {
    this.ctx.restore();
  }
}
