//useful thing animations
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback,element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();
function startup(){
  dpr("started");
  download_asset(GLOBAL);
  screen = document.getElementById("mat");
  paint_brush = screen.getContext("2d");
  swap_state(MAIN_MENU);
  screen.addEventListener("mousedown", mouseDown, false);
  screen.addEventListener("mouseup", mouseUp, false);
  screen.addEventListener("mousemove", mouseMove, false);
  //screen.addEventListener("mouseout", mouseOut, false);
  (function animationLOOP() {
        if(CONSTANT_ANIMATION){
          drawState();
        }
        requestAnimFrame(animationLOOP, screen);
  })();
}