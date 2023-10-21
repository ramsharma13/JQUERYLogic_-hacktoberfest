// Import stylesheets
import './style.css';

// Write Javascript code!
var url =
  'https://script.google.com/macros/s/AKfycbzXdCw6jJDEnz8q3GOnIuJTnibf3W_G75m5yT6wRQSQPWGNoe0QVRx6x0hWWpeI7bARKg/exec';
var json = $.getJSON(url);
$(document).ready(function () {
  json.done(function (data) {
    var rw = '';
    for (let i = 1; i < data.length; i++) {
      rw =
        rw +
        "<tr class='trr'><td class='c1'>" +
        data[i][0] +
        '</td><td class="c2"><a href="' +
        data[i][1] +
        '">&#x2913;</a></td></tr>';
    }
    $('#mytable').append(rw);

    $('.c1').on('click', function () {
      var pl = document.querySelector('#myplayer');
      pl.src = $(this).parent('tr').children('.c2').children('a')[0].href;
      //pl.loop = true;
      pl.play();
      $('#shwname').text($(this)[0].outerText);
    });
  });
});
