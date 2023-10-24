<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#generateButton').click(function () {
                var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
                $('#randomNumber').text('Random Number: ' + randomNumber);
            });
        });
    </script>
</head>

<body>
    <button id="generateButton">Generate Random Number</button>
    <div id="randomNumber"></div>
</body>

</html>
