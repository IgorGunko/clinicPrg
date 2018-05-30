import './main.scss';
import './js/jquery.js';
import './js/bootstrap.js';
var ProgressBar = require('./js/progressbar.js');
console.log('ok');

$(window).on("scroll", function(){
    if($(window).scrollTop() > 1050){
        loadProgress();
        $(window).off("scroll");
    }
});

$(document).ready(function () {
    function scroll() {
        if ($(window).scrollTop() >= 150) {
            $('.nav-container').addClass('affix');
        } else {
            $('.nav-container').removeClass('affix');
        }


    }

    document.onscroll = scroll;

});

function loadProgress() {
    $('.progress-circle').each(function(i) {
        var circle = new ProgressBar.Circle(this, {
            color: "red",
            easing: 'linear',
            strokeWidth: 9,
            duration: 3500,
            trailColor: '#00b9b8',
            trailWidth: 9,
            //fill: 'rgba(0, 0, 0, 0.1)',
            text: {
                value: '0'
            }
        });

        circle.text.style.fontSize = '40px';
        circle.text.style.color = '#fff';

        var value = ($(this).attr('value') / 100);

        circle.animate(value, {
            from: {
                color: "#fff"
            },
            to: {
                color: "#00b9b8"
            },
            step: function(state, circle, bar) {
                circle.path.setAttribute('stroke', state.color);
                circle.setText((circle.value() * 100).toFixed(0) + "%");
            }
        });
    });

}



