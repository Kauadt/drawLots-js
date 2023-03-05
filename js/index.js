// Learning new concepts of Javascript //:?

var shortcut = document.getElementById("add");
var raffle = document.getElementById("raffle");
var phrase = document.getElementById("phrase");
var 
counter = 0;
var newNum = 0;

var quote = [];
quote[0] = 'O medo é o caminho para o lado negro. O medo leva a raiva, a raiva leva ao ódio, o ódio leva ao sofrimento.';
quote[1] = 'Faça ou não faça. A tentativa não existe';
quote[2] = 'Que a força esteja com você';

var color = [];
color[0] = '#cccccc';
color[1] = '#ffff00';
color[2] = '#ffcc00';
color[3] = '#000000';
color[4] = '#ffffff';
color[5] = '#aaaaaa';


var rgba = 'rgba(' + (Math.floor(Math.random * 255)) + ',' +
    (Math.floor(Math.random * 255)) + ',' +
    (Math.floor(Math.random * 255)) + ',' +
    (Math.floor(Math.random)) + ')';


shortcut.addEventListener('click', () => {
    counter++
    var rgba = 'rgba(' + (Math.floor(Math.random() * 255)) + ',' +
        (Math.floor(Math.random() * 255)) + ',' +
        (Math.floor(Math.random() * 255)) + ',' +
        (Math.random()) + ')';
    document.getElementById('background').style.backgroundColor = rgba;

    alert(`O número do contador é ${counter} e a cor é ${rgba}`);
    return false;
});

raffle.addEventListener('click', () => {
    newNum = Math.floor(Math.random() * 20);
    var colorir = Math.floor(Math.random() * color.length);
    document.getElementById('background').style.backgroundColor = color[colorir];
    alert(`O resultado do sorteio é ${newNum} e a cor é ${color[colorir]}`);
    return false;
});


phrase.addEventListener('click', () => {
    newNum = Math.floor(Math.random() * quote.length);
    alert('/ ' + quote[newNum] + ' /');
    return false;
});

