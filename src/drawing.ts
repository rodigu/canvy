import { Canvy } from "./canvy.ts";
import { CanvyStatics } from "./statics.ts";

/**
 * Primitive Drawing functions for Canvy.
 * @date 6/23/2023 - 6:38:06 PM
 *
 * @export
 * @class CanvyDrawing
 * @typedef {CanvyDrawing}
 */
export class CanvyDrawing {
  /**
   * Canvas `fillStyle` wrapper
   * @date 6/24/2023 - 4:19:17 PM
   *
   * @param {Canvy} this
   * @param {number} red
   * @param {number} green
   * @param {number} blue
   */
  fill(this: Canvy, red: number, green: number, blue: number) {
    this.ctx.fillStyle = CanvyStatics.ColorToRGB({ red, green, blue });
  }

  strokeWeight(this: Canvy, weight: number) {
    this.ctx.lineWidth = weight;
  }

  strokeStyle(this: Canvy, red: number, green: number, blue: number) {
    this.ctx.strokeStyle = CanvyStatics.ColorToRGB({ red, green, blue });
  }

  rect(this: Canvy, x: number, y: number, width: number, height: number) {
    this.ctx.fillRect(x, y, width, height);
  }
}
