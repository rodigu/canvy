import { Color } from "./canvy.ts";

export class CanvyStatics {
  static ColorToRGB(color: Color) {
    const { red, green, blue } = color;
    return `rgb(${red},${green},${blue})`;
  }

  static ComponentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  static RGBToHex(red: number, green: number, blue: number): string {
    return (
      "#" +
      CanvyStatics.ComponentToHex(red) +
      CanvyStatics.ComponentToHex(green) +
      CanvyStatics.ComponentToHex(blue)
    );
  }

  static HexToRGB(hex: string): Color | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16),
        }
      : null;
  }
}
