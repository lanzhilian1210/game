function kaishi(){
    console.log(1);
var docElm = document.documentElement;
//W3C
if (docElm.requestFullscreen) {
docElm.requestFullscreen();
}
//FireFox
else if (docElm.mozRequestFullScreen) {
docElm.mozRequestFullScreen();
}
//Chrome等
else if (docElm.webkitRequestFullScreen) {
docElm.webkitRequestFullScreen();
}
//IE11
else if (elem.msRequestFullscreen) {
elem.msRequestFullscreen();
}
}