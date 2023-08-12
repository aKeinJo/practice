function getKey (e) {
    var KeyboardLocation = e.KeyboardLocation;
    var KeyboardSelector;
    if (KeyboardLocation === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        KeyboardSelector = ['[data-kressey="' + e.keyCode + '-R"]']
    } else {
        var v = e.keyCode || e.which;
        KeyboardSelector = [
            '[data-key="' + v + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(v)) + '"]'
        ].join(',');
    }
    return document.querySelector(KeyboardSelector);
}

function pressKey (char) {
    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    if (!key) {
        return console.warn('No key for', char);
    }
    key.setAttribute('data-pressed', 'on');
    setTimeout(function () {
        key.removeAttribute('data-pressed');
    }, 200);
}

var TypingEffect = document.querySelector('.area_keyboard p');
var originalQueue = TypingEffect.innerHTML;
var queue = TypingEffect.innerHTML;

function next () {
    var c = queue[0];
    queue = queue.slice(1);
    TypingEffect.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
    pressKey(c);
    if (queue.length) {
        setTimeout(next, Math.random() * 200 + 50);
    }
}

TypingEffect.innerHTML = "&nbsp;";
setTimeout(next, 500);

function again () {
    TypingEffect.innerHTML = "&nbsp;";

}

document.body.addEventListener('keydown', function (e) {
    var key = getKey(e);
    if (!key) {
        return console.warn('No key for', e.keyCode);
    }

    key.setAttribute('data-pressed', 'on');
});

document.body.addEventListener('keyup', function (e) {
    var key = getKey(e);
    key && key.removeAttribute('data-pressed');
});

function size () {
    var size = keyboard.parentNode.clientWidth / 60;
    keyboard.style.fontSize = size + 'px';
    console.log(size);
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
    size();
});

size();