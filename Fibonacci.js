<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fibonacci Series</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#generateButton').click(function () {
                var n = parseInt($('#fibonacciNumber').val());
                var fibonacciSeries = generateFibonacci(n);
                $('#result').text('Fibonacci Series: ' + fibonacciSeries.join(', '));
            });

            function generateFibonacci(n) {
                var fibonacciSeries = [];
                for (var i = 0; i < n; i++) {
                    if (i <= 1) {
                        fibonacciSeries.push(i);
                    } else {
                        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
                    }
                }
                return fibonacciSeries;
            }
        });
    </script>
</head>

<body>
    <label for="fibonacciNumber">Enter the number of Fibonacci numbers:</label>
    <input type="number" id="fibonacciNumber" min="1" value="1">
    <button id="generateButton">Generate Fibonacci Series</button>
    <div id="result"></div>
</body>

</html>
