function draw_main_menu(){
  dpr("aaaaaaa");
  paint_brush.drawImage(mainmenu_screen,0,0);
  paint_brush.drawImage(mainmenu_chess_thumbnail,30,450,100,100);
  paint_brush.drawImage(mainmenu_drawing_thumbnail,200,450,100,100);
  paint_brush.drawImage(mainmenu_twitter_thumbnail,360,450,100,100);
  paint_brush.drawImage(mainmenu_crazyaithing_thumbnail,530,450,100,100);
  paint_brush.drawImage(mainmenu_idk_thumbnail,670,450,100,100);
}
function down_main_menu(x,y){
  
}
function up_main_menu(x,y){
  dpr(x.toString() + " " + y.toString());
  if(y >= 450 && y <= 550){
    if(x >= 30 && x <= 130){
      swap_state(CHESS);
    }
    if(x >= 200 && x <= 300){
      swap_state(DRAWING_PAD);
    }
    if(x >= 360 && x <= 460){
      swap_state(TWITTER);
    }
    if(x >= 530 && x <= 630){
      swap_state(CRAZY_AI_THING);
    }
    if(x >= 670 && x <= 770){
      swap_state(IDK);
    }
  }
}
function move_main_menu(x,y){
  
  
}
function stop_main_menu(){
  
  
}
function start_main_menu(){
  
  
}