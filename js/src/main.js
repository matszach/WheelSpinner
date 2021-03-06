const cw = new Gmt.CanvasWrapper('canvas-home');
const spinner = new SpinnerHandler('options-home').init();
const painter = new Painter();
const saverLoader = new SaverLoader(spinner);
const resizer = new Resizer(cw, painter, spinner);
const fullscreen = new FullscreenToggler();

new Gmt.Loop(62, loop => {
    spinner.rotate();
    painter.paint(loop.getFrame(), cw, spinner);
}).start();