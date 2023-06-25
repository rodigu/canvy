import { CanvyDrawing } from "./drawing.ts";
import { CanvyImage } from "./image.ts";
import { CanvyTransform } from "./transform.ts";

export interface Color {
  red: number;
  green: number;
  blue: number;
}

export class Canvy implements CanvyDrawing, CanvyImage, CanvyTransform {
  public frameRate: number;
  public draw: (() => void) | undefined;

  readonly cvs: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;

  // Base shapes drawing
  readonly fill = CanvyDrawing.prototype.fill;
  readonly strokeWeight = CanvyDrawing.prototype.strokeWeight;
  readonly strokeStyle = CanvyDrawing.prototype.strokeStyle;
  readonly rect = CanvyDrawing.prototype.rect;

  // Image
  readonly loadImage = CanvyImage.prototype.loadImage;
  readonly image = CanvyImage.prototype.image;
  readonly imageSection = CanvyImage.prototype.imageSection;

  // Transformations
  readonly scale = CanvyTransform.prototype.scale;
  readonly transform = CanvyTransform.prototype.transform;
  readonly translate = CanvyTransform.prototype.translate;

  constructor(canvas: HTMLCanvasElement, imageSmoothingEnabled = false) {
    this.cvs = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.imageSmoothingEnabled = imageSmoothingEnabled;
    this.frameRate = 40;
  }

  set height(h: number) {
    this.cvs.height = h;
  }

  set width(w: number) {
    this.cvs.width = w;
  }

  initiate() {
    if (!this.draw) return;
    setInterval(this.draw, 1000 / this.frameRate);
  }
}
