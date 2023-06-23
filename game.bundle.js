// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class CanvyStatics {
    static ColorToRGB(color) {
        const { red , green , blue  } = color;
        return `rgb(${red},${green},${blue})`;
    }
    static ComponentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    static RGBToHex(red, green, blue) {
        return "#" + CanvyStatics.ComponentToHex(red) + CanvyStatics.ComponentToHex(green) + CanvyStatics.ComponentToHex(blue);
    }
    static HexToRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        } : null;
    }
}
class CanvyDrawing {
    fill(red, green, blue) {
        this.ctx.fillStyle = CanvyStatics.ColorToRGB({
            red,
            green,
            blue
        });
    }
    strokeWeight(weight) {
        this.ctx.lineWidth = weight;
    }
    strokeStyle(red, green, blue) {
        this.ctx.strokeStyle = CanvyStatics.ColorToRGB({
            red,
            green,
            blue
        });
    }
    rect(x, y, width, height) {
        this.ctx.fillRect(x, y, width, height);
    }
}
class Canvy {
    cvs;
    ctx;
    fill = CanvyDrawing.prototype.fill;
    strokeWeight = CanvyDrawing.prototype.strokeWeight;
    strokeStyle = CanvyDrawing.prototype.strokeStyle;
    rect = CanvyDrawing.prototype.rect;
    constructor(canvas){
        this.cvs = canvas;
        this.ctx = canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
    }
    set height(h) {
        this.cvs.height = h;
    }
    set width(w) {
        this.cvs.width = w;
    }
}
function GAME_STARTER(canvas) {
    if (!canvas) return;
    const cvy = new Canvy(canvas);
    cvy.height = 200;
    cvy.width = 200;
    cvy.fill(100, 120, 100);
    cvy.rect(20, 20, 20, 20);
}
export { GAME_STARTER as GAME_STARTER };
