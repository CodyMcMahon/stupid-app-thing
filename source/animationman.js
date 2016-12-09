function drawState(){
  dpr("draw");
  offsetX = screen.offsetLeft;
  offsetY = screen.offsetTop;
  switch (STATE){
     case MAIN_MENU: draw_main_menu();return 0;
     case DRAWING_PAD: draw_drawing_pad();break;
     case CHESS: draw_chess() ;break;
     case TWITTER: draw_twitter();break;
     case CRAZY_AI_THING: draw_ai();break;
     case IDK: draw_idk();break;
  }
  paint_brush.drawImage(global_back_to_main_menu,0,0,200,33);
}