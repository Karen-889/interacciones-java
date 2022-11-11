function encender(){
    var bombilla= document.getElementById('foco');
    bombilla.src='img/pic_bulbon.gif';
}
function apagar(){
    var bombilla= document.getElementById('foco');
    bombilla.src='img/pic_bulboff.gif';
}

function ocultar(){
    var bombilla = document.getElementById('foco');
    bombilla.style.display='none';

}

function mostrar (){
    var bombilla = document.getElementById('foco') ;
    bombilla.style.display='block';
}

function color(){
 var selector = document.getElementById('fondo');
 selector.style.background = 'red';
}
 

 function cambiarfondo(){
    
    var bad = prompt("ingrese color en ingles ");
    var selector= document.getElementById('fondo');
    selector.style.background= bad;

    

 }

function circulo(){
    var selector = document.getElementById('figura');
    selector.classList.toggle('circulo');

}
function subir(){
    var selector = document.getElementById('figura');
    selector.classList.toggle('top');
}
function rombo(){
    var selector = document.getElementById('figura');
    selector.classList.toggle('rombo')
}

function triangulo(){
    var selector = document.getElementById('figura');
    selector.classList.toggle('triangulo')
}
function botton(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('botton')
}
function izquierda(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('left')
}
function derecha(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('rigth')
}

function imagen(){
    var selector= document.getElementById('figura');
    selector ='img/mano.gif';
}

function superior(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('diagonal_sup')
}

function inferior(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('diagonal_inf')
}

function imagen(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('Gif')
}

function trapecio(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('trapecio')
}

function bandera(){
    var selector = document.getElementById('figura')
    selector.classList.toggle('bandera')
}