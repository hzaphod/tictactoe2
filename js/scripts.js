

function Board(firstPlayer,secondPlayer) {
  this.player1 = firstPlayer;
  this.player2 = secondPlayer;
  this.nextPlayer = this.player1;

  this.b = [[Square(0,0,this),Square(0,1,this),Square(0,2,this)],
            [Square(1,0,this),Square(1,1,this),Square(1,2,this)],
            [Square(2,0,this),Square(2,1,this),Square(2,2,this)]];
}

Board.prototype.markSpace = function(x, y) {
  console.log("board.markspace!");
  //debugger;
  console.log(this.b[x][y]);
  this.b[x][y].mark(this.nextPlayer);
/*
  if(this.checkSpace(x, y)===0) {
    // first mark space taken in our array.
    //this.b[x][y] = playerNumber;
    // now draw on the screen
    $("#space"+x+"-"+y).text(nextPlayer.playerSymbol);

  } else {
    // space is already taken!
    console.log(x+","+y+" Space already taken by player "+playerNumber);
  }
*/

}

/*
Board.prototype.checkSpace = function(x, y) {
  console.log("checkSpace!" + this.b[x][y]);
  return this.b[x][y];
}
*/

function Player(playerNumber,playerSymbol) {
  this.playerNumber = playerNumber;
  this.playerSymbol = playerSymbol;
}

function Square(x,y,parentBoard) {
  this.markedByPlayer = 0;
  this.board = parentBoard;
  this.x = x;
  this.y = y;
  this.squareId = "#space"+x+"-"+y;
  $(this.squareId).click(function(event) {
    console.log(event.target.id);
    console.log(this.squareId + " square clicked!"+x+","+y);
    parentBoard.markSpace(x,y);
    //$("#space"+x+"-"+y).text("X");
  });
}

Square.prototype.mark = function(Player) {
  if(this.markedByPlayer===0) {
    this.markedByPlayer = Player;
  } else {
    // this square is already marked.
  }
}

Square.prototype.isEmpty = function() {
  if(this.markedByPlayer===0) {
    return true;
  } else {
    return false;
  }
}


// start of tic tac toe game.
$(document).ready(function() {

  var p1 = new Player(1,"X");
  var p2 = new Player(2,"O");

  // create board and set first player.
  var board = new Board(p1,p2);
  /*
  $(".square").click(function(event) {
    console.log("square clicked!");
    board.markSpace(0,0,1);
  });
  */

  //event.preventDefault();
});
