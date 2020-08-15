var window;
var image;
var windowimg;
var caption;

var close;

function zoom(img) {
    if (img == 'img1') {
        window = document.getElementById = 'window1';
        image = document.getElementById = 'img1';
        windowimg = document.getElementById = 'pic1';
        caption = document.getElementById = 'caption';

        window.style.display = 'block';
        windowimg.src = this.src;
        caption.innerHTML = this.alt;

    }
}