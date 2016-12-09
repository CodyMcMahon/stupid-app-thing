var GLOBAL = "GLOBAL";
var MAIN_MENU = "MAIN_MENU";
var DRAWING_PAD = "DRAWING_PAD";
var CHESS = "CHESS";
var IDK = "IDK";
var TWITTER = "TWITTER";
var CRAZY_AI_THING = "CRAZY_AI_THING";
var DEBUGMODEALERT = 0;
var DEBUGMODECONSOLE = 0;
var offsetX = 0;
var offsetY = 0;
var screen = 0;
var paint_brush;
function dpr(s){
  if(DEBUGMODEALERT){
    alert(s);
  }
  if(DEBUGMODECONSOLE){
    console.log(s);
  }
}

var STATE = 0;

var CONSTANT_ANIMATION = 1;
//var BUTTONS = [];

var USER = {
  x           :       0,
  y           :       0,
  object_hover:       0,
  object_grab :       0,
  object_ref  :       0,
  is_clicking :       0,
  is_on_screen:       0,
};
