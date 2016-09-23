var player = document.getElementById('player');
var list = document.getElementById('list');


list.addEventListener('click', function(e){

    if(e.target.nodeName == 'LI') {
        player.src = e.target.dataset.src;
        player.play();
    }

}, false);

/*
*
* 1. Доработать плеер
 * - прогресс бар
 * - иконки старт, пауза, стоп
 * - громкость
 * - перемотка
 * - запоминать место на котором нажали паузу
 * 
*
*/
