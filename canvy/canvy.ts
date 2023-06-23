import { CanvyDrawing } from "./drawing.ts";

export interface Color {
  red: number;
  green: number;
  blue: number;
}

export class Canvy implements CanvyDrawing {
  readonly cvs: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;

  // Base shapes drawing
  readonly fill = CanvyDrawing.prototype.fill;
  readonly strokeWeight = CanvyDrawing.prototype.strokeWeight;
  readonly strokeStyle = CanvyDrawing.prototype.strokeStyle;
  readonly rect = CanvyDrawing.prototype.rect;

  constructor(canvas: HTMLCanvasElement) {
    this.cvs = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.imageSmoothingEnabled = false;
  }

  set height(h: number) {
    this.cvs.height = h;
  }

  set width(w: number) {
    this.cvs.width = w;
  }
}
