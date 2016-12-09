function mouseDown(e){
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;
    USER.is_clicking = 1;
    if(STATE!=MAIN_MENU && x <= 200 && x >= 0 && y <= 33 && y>=0){
      swap_state(MAIN_MENU);
      return 0;
    }
    switch (STATE){
     case MAIN_MENU: down_main_menu(x,y);return 0;
     case DRAWING_PAD: down_drawing_pad(x,y);return 0;
     case CHESS: down_chess(x,y);return 0;
     case TWITTER: down_twitter(x,y);return 0;
     case CRAZY_AI_THING: down_ai(x,y); return 0;
     case IDK: down_idk(x,y);return 0;
    }
}
function mouseUp(e){
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;
    switch (STATE){
     case MAIN_MENU: up_main_menu(x,y);break;
     case DRAWING_PAD: up_drawing_pad(x,y);break;
     case CHESS: up_chess(x,y);break;
     case TWITTER: up_twitter(x,y);break;
     case CRAZY_AI_THING: up_ai(x,y);break;
     case IDK: up_idk(x,y);break;
    } 
    USER.is_clicking = 0;
}
function mouseMove(e){
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;
    USER.x = x;
    USER.y = y;
    USER.is_on_screen = 1;
    switch (STATE){
     case MAIN_MENU: move_main_menu(x,y);return 0;
     case DRAWING_PAD: move_drawing_pad(x,y);return 0;
     case CHESS: move_chess(x,y);return 0;
     case TWITTER: move_twitter(x,y);return 0;
     case CRAZY_AI_THING: move_ai(x,y); return 0;
     case IDK: move_idk(x,y);return 0;
    }
}
function mouseOut(e){
  USER.object = 0;
  USER.is_on_screen = 0;
  USER.is_clicking = 0;
}