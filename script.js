function make() {
  myGameArea.start();
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 480;
    this.canvas.height = 800;
    this,context = this.canvas,getContext("2d");
  }
};
