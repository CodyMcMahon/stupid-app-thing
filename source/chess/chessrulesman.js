//origin is bottom left at x = 0 and y = 0
//black is top white is bottom
//move format [bool can kill, X movement , Y movement]
//castles, pawn transformations, and check conditions will be handled elsewhere in code
var chess_black_pawn_rules = {
  first_move : [
    [false,0,-2]//this move has a special condition where hopping over a piece kills it
  ],
  normal_move : [
    [false,0,-1],[true,-1,-1],[true,1,-1]//none of these moves are straight forward
  ],
};
var chess_white_pawn_rules = {
  first_move : [
    [false,0,2]//this move has a special condition where hopping over a piece kills it
  ],
  normal_move : [
    [false,0,1],[true,-1,1],[true,1,1]//none of these moves are straight forward
  ],
};
var chess_black_rook_rules = {
  first_move : [
  
  ],
  normal_move : [
    [true,0,1],[true,0,-1],
    [true,0,2],[true,0,-2],
    [true,0,3],[true,0,-3],
    [true,0,4],[true,0,-4],
    [true,0,5],[true,0,-5],
    [true,0,6],[true,0,-6],
    [true,0,7],[true,0,-7],
    [true,1,0],[true,-1,0],
    [true,2,0],[true,-2,0],
    [true,3,0],[true,-3,0],
    [true,4,0],[true,-4,0],
    [true,5,0],[true,-5,0],
    [true,6,0],[true,-6,0],
    [true,7,0],[true,-7,0],
  ],
};
var chess_white_rook_rules = chess_black_rook_rules;
var chess_black_bishop_rules = {
  first_move : [
    
  ],
  normal_move : [
    [true, 1, 1],[true, 1,-1],
    [true, 2, 2],[true, 2,-2],
    [true, 3, 3],[true, 3,-3],
    [true, 4, 4],[true, 4,-4],
    [true, 5, 5],[true, 5,-5],
    [true, 6, 6],[true, 6,-6],
    [true, 7, 7],[true, 7,-7],
    [true,-1,-1],[true,-1, 1],
    [true,-2,-2],[true,-2, 2],
    [true,-3,-3],[true,-3, 3],
    [true,-4,-4],[true,-4, 4],
    [true,-5,-5],[true,-5, 5],
    [true,-6,-6],[true,-6, 6],
    [true,-7,-7],[true,-7, 7],
  ],
};
var chess_white_bishop_rules = chess_black_bishop_rules;
var chess_black_queen_rules = {
  first_move : [
    
  ],
  normal_move : chess_black_bishop_rules.normal_move + chess_black_rook_rules.normal_move,
};
var chess_white_queen_rules = chess_black_queen_rules;
var chess_black_knights_rules = {
  first_move : [
    
  ],
  normal_move : [
    [true,1,2],
    [true,1,-2],
    [true,-1,2],
    [true,-1,-2],
    [true,-2,1],
    [true,2,1],
    [true,2,-1],
    [true,-2,-1],
  ]
};
//do this later
var chess_black_king_rules = {
  first_move : [
    [0,-2]//this move has a special condition where hopping over a piece kills it
  ],
  normal_move : [
    [false,0,-1],[true,-1,-1],[true,1,-1]//none of these moves are straight forward
  ],
};