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
class CanvyImage {
    loadImage(src) {
        const img = new Image();
        img.src = src;
        return img;
    }
    image(img, x, y, wid, hei) {
        wid ??= img.width;
        hei ??= img.height;
        this.ctx.drawImage(img, x, y, wid, hei);
    }
    imageSection(img, xOnCanvas, yOnCanvas, widOnCanvas, heiOnCanvas, xFromImage, yFromImage, widFromImage, heiFromImage) {
        this.ctx.drawImage(img, xOnCanvas, yOnCanvas, widOnCanvas, heiOnCanvas, xFromImage, yFromImage, widFromImage, heiFromImage);
    }
}
class CanvyTransform {
    scale(x, y) {
        this.ctx.scale(x, y);
    }
    translate(x, y) {
        this.ctx.translate(x, y);
    }
    transform(horizontalScale, horizontalSkew, verticalSkew, verticalScale, horizontalMove, verticalMove) {
        this.ctx.transform(horizontalScale, horizontalSkew, verticalSkew, verticalScale, horizontalMove, verticalMove);
    }
    rotate(radians) {
        this.ctx.rotate(radians);
    }
    push() {
        this.ctx.save();
    }
    pop() {
        this.ctx.restore();
    }
}
class Canvy {
    frameRate;
    draw;
    cvs;
    ctx;
    fill = CanvyDrawing.prototype.fill;
    strokeWeight = CanvyDrawing.prototype.strokeWeight;
    strokeStyle = CanvyDrawing.prototype.strokeStyle;
    rect = CanvyDrawing.prototype.rect;
    loadImage = CanvyImage.prototype.loadImage;
    image = CanvyImage.prototype.image;
    imageSection = CanvyImage.prototype.imageSection;
    scale = CanvyTransform.prototype.scale;
    transform = CanvyTransform.prototype.transform;
    translate = CanvyTransform.prototype.translate;
    rotate = CanvyTransform.prototype.rotate;
    push = CanvyTransform.prototype.push;
    pop = CanvyTransform.prototype.pop;
    mouseX;
    mouseY;
    mouseIsPressed;
    mouseButton;
    constructor(canvas, imageSmoothingEnabled = false){
        this.cvs = canvas;
        this.ctx = canvas.getContext("2d");
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
    set width(w) {
        this.cvs.width = w;
    }
    get height() {
        return this.cvs.height;
    }
    set height(h) {
        this.cvs.height = h;
    }
    initiate() {
        if (!this.draw) return;
        setInterval(()=>{
            if (this.draw) this.draw();
            this.mouseIsPressed = false;
            this.mouseButton = -1;
        }, 1000 / this.frameRate);
        this.cvs.addEventListener("mousemove", (event)=>{
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
        });
        this.cvs.addEventListener("mousedown", (event)=>{
            this.mouseIsPressed = true;
            this.mouseButton = event.button;
        });
    }
}
function TESTER(canvas) {
    if (!canvas) return;
    const cvy = new Canvy(canvas);
    cvy.height = window.innerHeight;
    cvy.width = window.innerWidth;
    cvy.draw = ()=>{
        cvy.ctx.fillStyle = "black";
        cvy.rect(0, 0, cvy.width, cvy.height);
        cvy.fill(255, 20, 100);
        cvy.rect(cvy.mouseX, cvy.mouseY, 10, 10);
        cvy.rect(10, 10, 10, 10);
        console.log(cvy.mouseX, cvy.mouseY);
    };
    cvy.initiate();
}
export { TESTER as TESTER };
