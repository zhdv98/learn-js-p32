var h1 = document.getElementById("h1");

h1.onclick = function(e) {
    if (h1.innerText == 'Head 1')
        h1.innerText = "click"
    else
        h1.innerText = 'Head 1'
};

/**
 * DZ теория
 * 1. CSS http://htmlbook.ru/css or http://www.ex.ua/18663846
 * 2. https://learn.javascript.ru/document 9 глав на след пару !
 *
 * DZ практика
 * 1. С помощью js менять стили элементов на странице. У каждого элемента
 * должно быть какое то уникалоное свойство
 * 2. Есть 9 каортинок, задача при наведении на картинку показывать ее в увеличенном виде, в модальном окне, привязанной к курсору
 * */

