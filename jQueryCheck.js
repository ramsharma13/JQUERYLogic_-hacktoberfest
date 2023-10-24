<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Even/Odd Checker</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#checkButton').click(function () {
                var number = parseInt($('#numberInput').val());
                if (isNaN(number)) {
                    $('#result').text('Please enter a valid number.');
                } else {
                    if (number % 2 === 0) {
                        $('#result').text(number + ' is even.');
                    } else {
                        $('#result').text(number + ' is odd.');
                    }
                }
            });
        });
    </script>
</head>

<body>
    <label for="numberInput">Enter a number:</label>
    <input type="number" id="numberInput">
    <button id="checkButton">Check</button>
    <div id="result"></div>
</body>

</html>
