import './main.scss';
import './js/jquery.js';
import './js/bootstrap.min.js';
var ProgressBar = require('./js/progressbar.js');
//import './js/slick.min.js';
console.log('ok');

$('.progress-circle').each(function(i) {
    var circle = new ProgressBar.Circle(this, {
        color: "red",
        easing: 'linear',
        strokeWidth: 5,
        duration: 1500,
        text: {
            value: '0'
        }
    });

    circle.text.style.fontSize = '40px';
    circle.text.style.color = '#fff';

    var value = ($(this).attr('value') / 100);

    circle.animate(value, {
        from: {
            color: "#ccc"
        },
        to: {
            color: "#60b8b7"
        },
        step: function(state, circle, bar) {
            circle.path.setAttribute('stroke', state.color);
            circle.setText((circle.value() * 100).toFixed(0) + "%");
        }
    });
});
