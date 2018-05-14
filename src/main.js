import './main.scss';
import './js/jquery.js';
import './js/bootstrap.min.js';
var ProgressBar = require('./js/progressbar.js');
//import './js/slick.min.js';
console.log('ok');

$(window).on("scroll", function(){
    if($(window).scrollTop() > 1050){
        loadProgress();
        $(window).off("scroll");
    }
});

function loadProgress() {
    $('.progress-circle').each(function(i) {
        var circle = new ProgressBar.Circle(this, {
            color: "red",
            easing: 'linear',
            strokeWidth: 5,
            duration: 3500,
            trailColor: '#b0cecc',
            trailWidth: 5,
            //fill: 'rgba(0, 0, 0, 0.1)',
            text: {
                value: '0'
            }
        });

        circle.text.style.fontSize = '30px';
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

}





