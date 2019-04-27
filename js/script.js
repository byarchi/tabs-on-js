window.addEventListener('DOMContentLoaded', function() {

    'use strict';
        var tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.info-tabcontent');
        
        function hideTabContent(a) {
            for (   var i = a; i < tabContent.length; i++ ) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
    }

    info.addEventListener( 'click', function(event) {
        var target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(var i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Таймер

    var deadline = '2019-04-28'; // Здесь задается срок окончания таймера

    function getTimeRemaining (endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes= Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return{
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'second': seconds
            };
    }

    function setClock(endtime) {
        var timer = document.getElementById('timer'), // Тут задается ID div-блока с таймером на странице
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            second = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            var t = getTimeRemaining(endtime);
            if(t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            if(t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }
            if(t.second < 10) {
                second.textContent = '0' + t.second;
            } else {
                second.textContent = t.second;
            }
            if(t.total <= 0) {
                clearInterval(timeInterval);
            }                
        }

       
    }

    setClock(deadline);
    
});