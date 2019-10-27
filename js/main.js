document.getElementById("seccion1").style.display="none";
document.getElementById("seccion3").style.display="none";
document.getElementById("seccion4").style.display="none";

function pantallaSeleccion(){
    for(i=1;i<11;i++){
        document.getElementById("boton"+i).style.display="block";
    }
    document.getElementById("estadistica").style.display="none";
    document.getElementById("seccion2").style.display="none";
    document.getElementById("seccion4").style.display="grid";
    document.getElementById("seleccionPersonajes").style.display="grid";
    document.body.style.backgroundImage = "url(imagenes/pantalla2.png)";
    document.getElementById("botonComenzarJugar").style.display="none";
    
}

function pantallaCombate(){
    
    document.getElementById("personaje1").style.display="block";
    document.getElementById("personaje1").style.display="block";

    document.body.style.backgroundImage = "url(imagenes/pantalla3.jpg)";
    document.getElementById("seleccionPersonajes").style.display="none";
    document.getElementById("seccion1").style.display="flex";
    document.getElementById("seccion2").style.display="grid";
    document.getElementById("seccion3").style.display="grid";
    document.getElementById("botonJugar").style.display="none";
    document.getElementById("botonComenzarJugar").style.display="none";
    document.getElementById("botonStart").style.display="block";
    document.getElementById('personaje1').src= juego.player1[0].aspecto;
    document.getElementById('personaje2').src= juego.player2[0].aspecto;
    document.getElementById('dañoPlayer1').style.display="none";
    document.getElementById('dañoPlayer2').style.display="none";


    

}

