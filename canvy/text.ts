import { Canvy } from "./canvy.ts";

class CanvyText {
  text(this: Canvy, text: string, x: number, y: number) {
    this.ctx.fillText(text, x, y);
  }
}
