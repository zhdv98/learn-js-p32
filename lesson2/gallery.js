// Берем по id нашу голерею, и записываем ее в переменную
var gallery = document.getElementById("gallery");
// Записываем в переменную по id отображение картинки
var show = document.getElementById("show");
var currentImage = null;

;(function() {
    for (var i = 1; i <= 12; i++) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = "images/" + i + ".jpg";
        li.appendChild(img);
        gallery.appendChild(li);
    }
})();

gallery.addEventListener("mousemove", function(e) {
    // проверяем тип обьекта
    if ( e.target.nodeName == 'IMG' ) {
        if(currentImage != e.target.attributes.src.nodeValue) {
            show.innerText = "";

            var image = document.createElement('img');
            currentImage = image.src = e.target.attributes.src.nodeValue;

            show.appendChild(image);
        }
        // задаем позицию
        show.style.top = e.y + 10 + "px";
        show.style.left = e.x + 10 + "px";
        show.style.display = "block";
    }
    // функция отвода мыши с блока gallery
    e.target.addEventListener("mouseout", function (j) {
        show.style.display = "none"
    }, false);

}, false);

/**
 * Tеория learn.javascript.ru
 * Основы работы с событиями
 * События в деталях
 *
 * 1. Игра парные карты http://igroflot.ru/logic/flash_game_2470/
 * 2. Если картинка снизу экрана выводить ее над курсором
 */



