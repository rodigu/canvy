# Canvy

Deno library for basic canvas manipulation inspired by P5JS.

## Development References

### Problems

- [Pixel art scaling](https://7tonshark.com/posts/pixel-art-canvas-resize/)
- [Canvas interpolation filter disabling](https://stackoverflow.com/questions/7615009/disable-interpolation-when-scaling-a-canvas)
- [TypeScript class design](https://stackoverflow.com/questions/23876782/how-do-i-split-a-typescript-class-into-multiple-files)

### Longer References

- [Canvas deep dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
- [Canvas handbook](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
- [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
  - [`Image` constructor](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)

```js
const myImage = new Image(100, 200);
myImage.src = "picture.jpg";
document.body.appendChild(myImage);

myImage.complete;
```
