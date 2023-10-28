<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAPTCHA Generator</title>
    <style>
        #captcha {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div id="captcha"></div>
    <input type="text" id="userInput" placeholder="Enter CAPTCHA">
    <button id="checkButton">Check CAPTCHA</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        // Function to generate random CAPTCHA
        function generateCaptcha() {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var captcha = '';
            for (var i = 0; i < 6; i++) {
                captcha += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return captcha;
        }

        // Initial CAPTCHA generation
        var captchaText = generateCaptcha();
        $('#captcha').text(captchaText);

        // Check CAPTCHA function
        $('#checkButton').click(function() {
            var userInput = $('#userInput').val();
            if (userInput === captchaText) {
                alert('CAPTCHA Correct!');
            } else {
                alert('CAPTCHA Incorrect. Please try again.');
            }
            // Generate new CAPTCHA after checking
            captchaText = generateCaptcha();
            $('#captcha').text(captchaText);
            // Clear user input field
            $('#userInput').val('');
        });
    </script>
</body>
</html>
