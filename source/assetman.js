//place holder for place holders
var missing_asset = new Image();
missing_asset.src = "assets/missing_asset.png";
//initialize everything with the placeholder

//main menu
var mainmenu_screen = missing_asset;
var mainmenu_drawing_thumbnail = missing_asset;
var mainmenu_chess_thumbnail = missing_asset;
var mainmenu_twitter_thumbnail = missing_asset;
var mainmenu_crazyaithing_thumbnail = missing_asset;
var mainmenu_idk_thumbnail = missing_asset;

//drawing pad
var drawing_pad_main_empty = missing_asset;
var drawing_pad_main_white = missing_asset;
var drawing_pad_color_purple = missing_asset;

//chess
var chess_chessboard = missing_asset;
var chess_pawn_black = missing_asset;
var chess_pawn_white = missing_asset;
var chess_rook_black = missing_asset;
var chess_rook_white = missing_asset;
var chess_bishop_black = missing_asset;
var chess_bishop_white = missing_asset;
var chess_knight_black = missing_asset;
var chess_knight_white = missing_asset;
var chess_queen_black = missing_asset;
var chess_queen_white = missing_asset;
var chess_king_black = missing_asset;
var chess_king_white = missing_asset;

//twitter
var twitter_background = missing_asset;

//ai
var ai_background = missing_asset;

//idk

//global
var global_back_to_main_menu = missing_asset;

var ASSETS_LOADED = {
  global :            0,
  main_menu :         0,
  drawing_pad :       0,
  chess :             0,
  twitter :           0,
  crazy_ai_thing :    0,
  idk :               0,
};
function download_asset(which_ones){
  if(ASSETS_LOADED[which_ones]){
    return;
  }
  switch(which_ones){
    case MAIN_MENU:
      mainmenu_screen = new Image();
      mainmenu_screen.src = "assets/mainmenu/main_menu_screen.png";
      mainmenu_drawing_thumbnail = new Image();
      mainmenu_drawing_thumbnail.src = "assets/mainmenu/main_menu_drawing_pad_thumbnail.png";
      mainmenu_chess_thumbnail = new Image();
      mainmenu_chess_thumbnail.src = "assets/mainmenu/main_menu_chess_thumbnail.png";
      mainmenu_twitter_thumbnail = new Image();
      mainmenu_twitter_thumbnail.src = "assets/mainmenu/main_menu_twitter_thumbnail.png";
      mainmenu_crazyaithing_thumbnail = new Image();
      mainmenu_crazyaithing_thumbnail.src = "assets/mainmenu/main_menu_crazyaithing_thumbnail.png";
      break;
    case DRAWING_PAD:
      drawing_pad_main_empty = new Image();
      drawing_pad_main_empty.src = "assets/drawing/drawing_pad_main_empty.png";
      drawing_pad_main_white = new Image();
      drawing_pad_main_white.src = "assets/drawing/drawing_pad_main_white.png";
      drawing_pad_color_purple = new Image();
      drawing_pad_color_purple.src = "assets/drawing/drawing_pad_color_purple.png";
      break;
    case CHESS:
      chess_chessboard = new Image();
      chess_chessboard.src = "assets/chess/chess_chessboard.png";
      chess_pawn_black = new Image();
      chess_pawn_black.src = "assets/chess/chess_pawn_black.png";
      chess_pawn_white = new Image();
      chess_pawn_white.src = "assets/chess/chess_pawn_white.png";
      chess_rook_black = new Image();
      chess_rook_black.src = "assets/chess/chess_rook_black.png";
      chess_rook_white = new Image();
      chess_rook_white.src = "assets/chess/chess_rook_white.png";
      chess_bishop_black = new Image();
      chess_bishop_black.src = "assets/chess/chess_bishop_black.png";
      chess_bishop_white = new Image();
      chess_bishop_white.src = "assets/chess/chess_bishop_white.png";
      chess_knight_black = new Image();
      chess_knight_black.src = "assets/chess/chess_knight_black.png";
      chess_knight_white = new Image();
      chess_knight_white.src = "assets/chess/chess_knight_white.png";
      chess_queen_black = new Image();
      chess_queen_black.src = "assets/chess/chess_queen_black.png";
      chess_queen_white = new Image();
      chess_queen_white.src = "assets/chess/chess_queen_white.png";
      chess_king_black = new Image();
      chess_king_black.src = "assets/chess/chess_king_black.png";
      chess_king_white = new Image();
      chess_king_white.src = "assets/chess/chess_king_white.png";
      break;
    case TWITTER:
      twitter_background = new Image();
      twitter_background.src = "assets/twitter/twitter_background.png";
      break;
    case CRAZY_AI_THING:
      ai_background = new Image();
      ai_background.src = "assets/ai/ai_background.png";
      
      break;
    case IDK:
      
      
      
      break;
    case GLOBAL:
      global_back_to_main_menu = new Image();
      global_back_to_main_menu.src = "assets/global/global_back_to_main_menu.png";
  } 
  ASSETS_LOADED[which_ones] = 1;
}
function swap_state(which_one){
  switch(STATE){
     case MAIN_MENU: stop_main_menu();break;
     case DRAWING_PAD: stop_drawing_pad();break;
     case CHESS: stop_chess() ;break;
     case TWITTER: stop_twitter();break;
     case CRAZY_AI_THING: stop_ai();break;
     case IDK: stop_idk();break;
  }
  download_asset( which_one);
  STATE = which_one;
  switch(STATE){
     case MAIN_MENU: start_main_menu();break;
     case DRAWING_PAD: start_drawing_pad();break;
     case CHESS: start_chess() ;break;
     case TWITTER: start_twitter();break;
     case CRAZY_AI_THING: start_ai();break;
     case IDK: start_idk();break;
  }
}