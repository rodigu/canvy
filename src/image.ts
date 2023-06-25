import { Canvy } from "./canvy.ts";

export class CanvyImage {
  loadImage(this: Canvy, src: string) {
    const img = new Image();
    img.src = src;
    return img;
  }

  image(this: Canvy, img: HTMLImageElement, x: number, y: number, wid?: number, hei?: number) {
    wid ??= img.width
    hei ??= img.height
    this.ctx.drawImage(img, x, y, wid, hei);
  }

  imageSection(this: Canvy, img: HTMLImageElement, imgX: number, imgY: number, imgWid: number, imgHei: number, canvasX: number, canvasY: number, canvasWid: number, canvasHei: number) {
    this.ctx.drawImage(img, imgX, imgY, imgWid, imgHei, canvasX, canvasY, canvasWid, canvasHei)
  }
}
