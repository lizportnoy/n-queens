/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  // if loop through board of n to the power of n
  var board = new Board({'n':n});
  for (var i = 0; i<n; i++) {
    board.togglePiece(i,i);
  }

  for (var i = 0; i < n; i++) {
    solution.push(board.get(i));
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  // debugger;
  var solutionCount = 0;
  var board = new Board({'n':n});
  var boardSize = n;

  var rooksRecurse = function (n, row) {
    //Establish base row and reset following rows 0
    for (var i = 0; i < boardSize; i++) {
      //Base row and toggle the row
      board.togglePiece(row, i);
      //Iterating through following rows
      for (var rowBelow = row+1; rowBelow <boardSize; rowBelow++) {
        //Iterate through columns
        for ( var colInd = 0; colInd < boardSize ; colInd++) {
          //There is 1 in specified row, toggle back to 0
          if (board.get(rowBelow)[colInd] === 1) {
            board.togglePiece(rowBelow, colInd);
          }
        }
      }

      //Toggle piece for previous columns on the same row
      if (i > 0 && board.get(row)[i-1] === 1) {
        board.togglePiece(row, i - 1);
      }

      if(board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i);
      } else {
        // if there wasn't a conflict, you'll want to keep going with problem
        if (row+1 < boardSize) {
          rooksRecurse(n - 1, row + 1);
        } else {
          solutionCount++;
        }
      }
    }
  };

  rooksRecurse(n,0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {



    var board = new Board({'n':n});
    var boardSize = n;
    var result = [];
    var found = false;

    var queensRecurse = function (n, row) {

      //Establish base row and reset following rows 0
      for (var i = 0; i < boardSize; i++) {
        if (found) {
          return;
        }
        //Base row and toggle the row
        board.togglePiece(row, i);
        debugger;

        //Iterating through following rows
        for (var rowBelow = row+1; rowBelow <boardSize; rowBelow++) {
          //Iterate through columns
          for ( var colInd = 0; colInd < boardSize ; colInd++) {
            //There is 1 in specified row, toggle back to 0
            if (board.get(rowBelow)[colInd] === 1) {
              board.togglePiece(rowBelow, colInd);
            }
          }
        }

        //Toggle piece for previous columns on the same row
        if (i > 0 && board.get(row)[i-1] === 1) {
          board.togglePiece(row, i - 1);
        }

        if(board.hasAnyQueensConflicts()) {
          board.togglePiece(row, i);
        } else {
          // if there wasn't a conflict, you'll want to keep going with problem
          if (row+1 < boardSize) {
            queensRecurse(n - 1, row + 1);
          } else {
            debugger;
            if(!found) {
            for (var k = 0; k < boardSize; k++) {
              result.push(board.get(k).slice());
            }
            found = true;
            }
          }
        }
      }
    };

    queensRecurse(n,0);

    if (!found) {
      result = {n: n}
    }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

    if (n === 0) {
      return 1;
    }
    // debugger;
    var solutionCount = 0;
    var board = new Board({'n':n});
    var boardSize = n;

    var queensRecurse = function (n, row) {
      //Establish base row and reset following rows 0
      for (var i = 0; i < boardSize; i++) {
        //Base row and toggle the row
        board.togglePiece(row, i);
        //Iterating through following rows
        for (var rowBelow = row+1; rowBelow <boardSize; rowBelow++) {
          //Iterate through columns
          for ( var colInd = 0; colInd < boardSize ; colInd++) {
            //There is 1 in specified row, toggle back to 0
            if (board.get(rowBelow)[colInd] === 1) {
              board.togglePiece(rowBelow, colInd);
            }
          }
        }

        //Toggle piece for previous columns on the same row
        if (i > 0 && board.get(row)[i-1] === 1) {
          board.togglePiece(row, i - 1);
        }

        if(board.hasAnyQueensConflicts()) {
          board.togglePiece(row, i);
        } else {
          // if there wasn't a conflict, you'll want to keep going with problem
          if (row+1 < boardSize) {
            queensRecurse(n - 1, row + 1);
          } else {
            solutionCount++;
          }
        }
      }
    };

    queensRecurse(n,0);

    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
};
