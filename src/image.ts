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

  imageSection(this: Canvy, img: HTMLImageElement, xOnCanvas: number, yOnCanvas: number, widOnCanvas: number, heiOnCanvas: number, xFromImage: number, yFromImage: number, widFromImage: number, heiFromImage: number) {
    this.ctx.drawImage(img, xOnCanvas, yOnCanvas, widOnCanvas, heiOnCanvas, xFromImage, yFromImage, widFromImage, heiFromImage)
  }
}
