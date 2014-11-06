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
  // debugger;
  var solutionCount = 0;
  var board = new Board({'n':n});
  // for (var i = 0; i < board.get(0).length; i++) {
  //   board.togglePiece(i,0);
  // }
  // debugger;
  var row = 0;

  var rooksRecurse = function(n, row){
    if (n === 0) {
        solutionCount++;
     } else {
      for (var i = 0; i < board.get(0).length; i++) {
        // debugger;
        if (i > 0 && board.get(row)[i-1]=== 1) {
          board.togglePiece(row, i-1);
        }
        board.togglePiece(row,i);
        // debugger;
        if(board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
          board.togglePiece(row, i);
        } else {
          row++;
          n--;
          rooksRecurse(n,row);
        }
      }
    }

  };
  //   // add to count if you've found a viable solution
  rooksRecurse(n,row);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
