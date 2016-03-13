
var btn = document.getElementById('btn_click');
var icon = document.getElementById('icon');

var offscreenCanvas = document.createElement('canvas');
offscreenCanvas.width = 500;
offscreenCanvas.height = 500;
var context = offscreenCanvas.getContext('2d');

btn.onclick = function(){
    context.drawImage(icon, 0, 0);

    var onscreenCanvas = document.getElementById('onscreenCanvas');
    var onscreenContext = onscreenCanvas.getContext('2d');
    onscreenContext.drawImage(offscreenCanvas, 0, 0);
}
