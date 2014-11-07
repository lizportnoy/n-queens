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
var findSolution = function(n, row, board, verifier, callBack) {
  if (n === row) {
    return callBack(board.rows());
  };
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);

    if (!board[verifier]()) {
      if (findSolution(n, row+1, board, verifier, callBack)) {
        return true};
    }

    board.togglePiece(row,i);

  }

};

window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n:n});
  var callBack = function (result) {solution = result; return true;};

  findSolution(n, 0, board, 'hasAnyRooksConflicts', callBack);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution 
};


window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var callBack = function() {
    solutionCount++;
  }

  findSolution(n, 0, board, 'hasAnyRooksConflicts', callBack);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};

window.findNQueensSolution = function(n) {
  var solution;
  var board = new Board({n:n});
  var callBack = function (result) {solution = result; return true;};

  findSolution(n, 0, board, 'hasAnyQueensConflicts', callBack);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return !solution ? {n:n} : solution;
};


window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var callBack = function() {
    solutionCount++;
  }

  findSolution(n, 0, board, 'hasAnyQueensConflicts', callBack);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;

};


