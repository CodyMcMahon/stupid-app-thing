function draw_drawing_pad(){
  paint_brush.drawImage(drawing_pad_main_empty,0,0,800,600);
  
}
function down_drawing_pad(x,y){
  paint_brush.drawImage(drawing_pad_color_purple,x,y,5,5);
  
}
function up_drawing_pad(x,y){
  
  
}
function move_drawing_pad(x,y){
  if(USER.is_clicking){
    paint_brush.drawImage(drawing_pad_color_purple,x,y,5,5);
  }
  
}
function stop_drawing_pad(){
  
  
}
function start_drawing_pad(){
  paint_brush.drawImage(drawing_pad_main_white,0,0,800,600);
  
}