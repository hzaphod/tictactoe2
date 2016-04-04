var b = [[0,0,0], [0,0,0], [0,0,0]];

function Player(playerNumber,name) {
  this.playerNumber = playerNumber;
  this.name = name;
}

function Board(firstPlayer) {
  this.nextPlayer = firstPlayer.playerNumber;
}

Board.prototype.markSpace = function(x, y, playerNumber) {
  console.log("Meow!");
  //debugger;
  if(this.checkSpace(x, y)===0) {
    // first mark space taken in our array.
    b[x][y] = playerNumber;
    // now draw on the screen
    $("#space"+x+"-"+y).text("X");
  } else {
    // space is already taken!
    console.log(x+","+y+" Space already taken by player "+playerNumber);
  }
}

Board.prototype.checkSpace = function(x, y) {
  console.log("checkSpace!" + b[x][y]);
  return b[x][y];
}

/*
var Board = {
  nextPlayer: 1,
  markSpace: function(x, y, playerNumber) {
    console.log("Meow!");
    if(this.checkSpace(x, y)===0) {
      // first mark space taken in our array.
      b[x][y] = playerNumber;
      // now draw on the screen
      $(this).text("X");
    } else {
      // space is already taken!
      console.log(x+","+y+" Space already taken by player "+playerNumber);
    }
  },
  checkSpace: function(x, y) {
    console.log("checkSpace!" + b[x][y]);
    return b[x][y];
  }
};
*/

// start of tic tac toe game.
$(document).ready(function() {

  var p1 = new Player(1,"X");
  var p2 = new Player(2,"O");

  // create board and set first player.
  var board = new Board(p1);

  $(".square").click(function(event) {
    console.log("square clicked!");
    board.markSpace(0,0,1);
  });

  //event.preventDefault();
});
