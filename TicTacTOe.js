<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <style>
        .cell {
            width: 100px;
            height: 100px;
            border: 1px solid black;
            text-align: center;
            font-size: 36px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="board">
        <div class="cell" data-row="0" data-col="0"></div>
        <div class="cell" data-row="0" data-col="1"></div>
        <div class="cell" data-row="0" data-col="2"></div>
        <div class="cell" data-row="1" data-col="0"></div>
        <div class="cell" data-row="1" data-col="1"></div>
        <div class="cell" data-row="1" data-col="2"></div>
        <div class="cell" data-row="2" data-col="0"></div>
        <div class="cell" data-row="2" data-col="1"></div>
        <div class="cell" data-row="2" data-col="2"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        var currentPlayer = 'X';

        // Function to check for a winner
        function checkWinner() {
            var cells = $('.cell');
            var winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (var i = 0; i < winningCombinations.length; i++) {
                var combo = winningCombinations[i];
                if (cells[combo[0]].textContent && cells[combo[0]].textContent === cells[combo[1]].textContent && cells[combo[0]].textContent === cells[combo[2]].textContent) {
                    return cells[combo[0]].textContent;
                }
            }

            // Check for a draw
            var draw = true;
            for (var i = 0; i < cells.length; i++) {
                if (!cells[i].textContent) {
                    draw = false;
                    break;
                }
            }
            if (draw) {
                return 'Draw';
            }

            return null;
        }

        // Function to handle cell click
        function cellClick() {
            if (!$(this).text() && !checkWinner()) {
                $(this).text(currentPlayer);
                var winner = checkWinner();
                if (winner) {
                    if (winner === 'Draw') {
                        alert('It\'s a draw!');
                    } else {
                        alert('Player ' + winner + ' wins!');
                    }
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        // Function to reset the game
        function resetGame() {
            $('.cell').text('');
            currentPlayer = 'X';
        }

        // Attach click event to cells
        $('.cell').on('click', cellClick);
    </script>
</body>
</html>
