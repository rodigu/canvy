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
  readonly rotate = CanvyTransform.prototype.rotate;
  readonly push = CanvyTransform.prototype.push;
  readonly pop = CanvyTransform.prototype.pop;

  public mouseX: number;
  public mouseY: number;
  public mouseIsPressed: boolean;
  public mouseButton: number;

  constructor(canvas: HTMLCanvasElement, imageSmoothingEnabled = false) {
    this.cvs = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.imageSmoothingEnabled = imageSmoothingEnabled;
    this.frameRate = 40;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseIsPressed = false;
    this.mouseButton = -1;
  }

  get width() {
    return this.cvs.width;
  }

  set width(w: number) {
    this.cvs.width = w;
  }

  get height() {
    return this.cvs.height;
  }

  set height(h: number) {
    this.cvs.height = h;
  }

  initiate() {
    if (!this.draw) return;
    setInterval(() => {
      if (this.draw) this.draw();
      this.mouseIsPressed = false;
      this.mouseButton = -1;
    }, 1000 / this.frameRate);
    this.cvs.addEventListener("mousemove", (event: MouseEvent) => {
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
    });
    this.cvs.addEventListener("mousedown", (event: MouseEvent) => {
      this.mouseIsPressed = true;
      this.mouseButton = event.button;
    });
  }
}
