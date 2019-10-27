//SE CREA UN OBJETO LLAMADO JUEGO QUE SERA EL QUE INTEGRE LOS ESCENARIOS, LAS INSTANCIAS DE LA CLASE PERSONAJE
//Y LA LOGICA DE LA BATALLA.

let juego={
    player1:[], //ARRAYS DONDE SE ALMACENARAN TRES OBJETOS DE CLASE PERSONAJE QUE PERTENECERAN AL PLAYER 1 Y 2
 
    player2:[],

    p1:0, //CONTADORES QUE DARAN LA POSICION DE CADA OBJETO PERSONAJE DEL ARRAY player1 y player2. 
          // CUANDO UN LUCHADOR MUERA, EL CONTADOR SE INCREMENTARA EN 1 PARA ACCEDER AL LUCHADOR
          //DE LA POSICION SIGUIENTE EN EL ARRAY.
    p2:0,

    contador1:0, //CONTADORRES QUE ALMACENARAN EL NUMERO DE GOLPES DE CADA PLAYER.

    contador2:0,
    
    crearEquipos(person){ //FUNCION QUE PERMITE, MEDIANTE UN SWITCH, ELEGIR LOS LUCHADORES, INSTANCIARLOS 
                          //CON LA CLASE PERSONAJE, Y DARLES ATRIBUTOS UNICOS.
        
    if(this.player1.length < 3 )
    {
        switch(person){
            case 'johnnyCage':
            
                johnnyCage = new personaje('Johnny Cage', 25 ,7 ,3 ,'imagenes/johnnyCage1.gif');
                this.player1.push(johnnyCage); //METE CADA INSTANCIA EN LA ULTIMA POSICION DEL ARRAY PLAYER 1 Y 2
                
                document.getElementById("boton1").style.display="none"; //HACE DESAPARER LA FOTO DEL LUCHADOR
                                                                        //UNA VEZ HAYA SIDO ELEGIDO, EVITA DUPLICADOS      
                break
            case 'scorpion':
                scorpion= new personaje('Scorpion',27 ,7 ,1, 'imagenes/scorpion1.gif');   
                this.player1.push(scorpion);
                document.getElementById("boton2").style.display="none";
                
                break
            case 'liuKang':
                liuKang= new personaje('Liu Kang',22 ,7 ,5,'imagenes/liuKang1.gif');  
                this.player1.push(liuKang);
                document.getElementById("boton3").style.display="none";
                
                break
            case 'kitana':
                kitana= new personaje('kitana',25 ,7 ,3,'imagenes/kitana1.gif');      
                this.player1.push(kitana);
                document.getElementById("boton4").style.display="none";
                
            break
            case 'raiden':
                raiden= new personaje('Raiden', 26 ,6 ,4, 'imagenes/raiden1.gif');   
                this.player1.push(raiden);
                document.getElementById("boton5").style.display="none";
                 
                break
            case 'baraka':
                baraka= new personaje('Baraka', 28 ,8 ,2, 'imagenes/baraka1.gif');   
                this.player1.push(baraka);
                document.getElementById("boton6").style.display="none";
                
            break
            case 'shangTsung':
                shangTsung= new personaje('Shang Tsung',30 ,5 ,1,'imagenes/shangTsung1.gif');   
                this.player1.push(shangTsung);
                document.getElementById("boton7").style.display="none";
                
                break
            case 'kano':
                kano=new personaje('kano',29 ,8 ,8,'imagenes/kano1.gif'); 
                this.player1.push(kano);
                document.getElementById("boton8").style.display="none";
               
                break
            case 'reptile':
                reptile= new personaje('Reptile', 30 ,5 ,1,'imagenes/reptile1.gif');
                this.player1.push(reptile);
                document.getElementById("boton9").style.display="none";
                
                break
            case 'sonyaBlade':
                sonyaBlade= new personaje('Sonya Blade', 22 ,9 ,5, 'imagenes/sonyaBlade1.gif');
                this.player1.push(sonyaBlade);
                document.getElementById("boton10").style.display="none";
               
                break
            default:
            console.log("ha habido un error en la seleccion de player1");
            

    }
    }else if(this.player2.length < 3){
        
        switch(person){
            case 'johnnyCage':
                johnnyCage = new personaje('Johnny Cage', 25 ,7 ,3,'imagenes/johnnyCage2.gif');
                this.player2.push(johnnyCage);
                document.getElementById("boton1").style.display="none";
               break
            case 'scorpion':
                scorpion= new personaje('Scorpion',27 ,7 ,1,'imagenes/scorpion2.gif'); 
                this.player2.push(scorpion);
                document.getElementById("boton2").style.display="none";
                  
                break
            case 'liuKang':
                liuKang= new personaje('Liu Kang',22 ,7 ,5,'imagenes/liuKang2.gif');  
                this.player2.push(liuKang);
                document.getElementById("boton3").style.display="none";
                
                break
            case 'kitana':
                kitana= new personaje('Kitana',25 ,7 ,3,'imagenes/kitana2.gif');
                this.player2.push(kitana);
                document.getElementById("boton4").style.display="none";
                      
                break
            case 'raiden':
                raiden= new personaje('Raiden', 26 ,6 ,4,'imagenes/raiden2.gif');  
                this.player2.push(raiden);
                document.getElementById("boton5").style.display="none";
                  
                break
            case 'baraka':
                baraka= new personaje('Baraka', 28 ,8 ,2,'imagenes/baraka2.gif');   
                this.player2.push(baraka);
                document.getElementById("boton6").style.display="none";
                
                break
            case 'shangTsung':
                shangTsung= new personaje('Shang Tsung',30 ,5 ,1,'imagenes/shangTsung2.gif'); 
                this.player2.push(shangTsung);
                document.getElementById("boton7").style.display="none";
                  
                break
            case 'kano':
                kano=new personaje('kano',29 ,8 ,8,'imagenes/kano2.gif'); 
                this.player2.push(kano);
                document.getElementById("boton8").style.display="none";
                
                break
            case 'reptile':
                reptile= new personaje('Reptile', 30 ,5 ,1,'imagenes/reptile2.gif');
                this.player2.push(reptile);
                document.getElementById("boton9").style.display="none";
                
                break
            case 'sonyaBlade':
                sonyaBlade= new personaje('Sonya Blade', 22 ,9 ,5,'imagenes/sonyaBlade2.gif');
                this.player2.push(sonyaBlade);
                document.getElementById("boton10").style.display="none";
                
                break
            default:
                console.log("ha habido un error en seleccion player2");
               
    
            }

            //UNA VEZ CADA PLAYER HAYA ELEGIDO 3 JUGADORES,SE COMPRUEBA QUE LOS ARRAYS TENGAN ALMACENADOS
            //3 OBJETOS CADA UNO Y SE PERMITE LA VISUALIZACION DEL BOTON
            //COMENZAR A JUGAR, EL CUAL AL SER PULSADO TE LLEVA A LA PANTALLA DEBATALLA

            if(this.player1.length==3 && this.player2.length==3){
            
                document.getElementById("botonComenzarJugar").style.display="block";
    
            }
        }
        
    },

    //EN ESTA FUNCION SE ALOJA TODA LA LOGICA REFERENTE AL COMBATE, DAÑO INFLINGIDO, BLOQUEOS Y VIDA SUSTRAIDA POR
    //Y PARA CADA UNO DE LOS LUCHADORES.

    jugar(){
        document.getElementById('personaje1').style.display="block";
        document.getElementById('personaje2').style.display="block";

        let turno;
        turno=Number(Math.floor(Math.random()*2+1)); //EL TURNO DE ATAQUE SERA GENERADO ALEATORIAMENTE 
                                                    //SIENDO 1 PARA EL PLAYER 1 Y 2 PARA EL PLAYER 2
    
        if(this.p1<3 && this.p2<3){ 
             //SI EL CONTADOR DE LUCHADORES NO ES MAYOR QUE EL NUMERO DE LUCHADORES TOTAL POR CADA ARRAY
            //SE VISUALIZARA LA VIDA DEL LUCHADOR ACTUAL EN LA BARRA SUPERO CORRESPONDIENTE.

            document.getElementById('dañoPlayer1').style.display="flex";
            document.getElementById('dañoPlayer2').style.display="flex";
            document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p1].nombre+" ------------- "+this.player1[this.p1].vida+" puntos de vida"
            document.getElementById("vidaPersonaje2").innerHTML=this.player2[this.p2].nombre+" ------------- "+this.player2[this.p2].vida+" puntos de vida"

             
            if(this.player1[this.p1].vida > 0 && this.player2[this.p2].vida > 0){

                if (turno == 1){
                    //SIEMPRE QUE SE DE LA CONDICION DE QUE LOS DOS ESTEN VIVOS, ENTRARA EN ESTA SERIE DE INSTRUCCIONES
                    //PARA IR SUSTRAYENDOSE PUNTOS DE VIDA MUTUAMENTE SEGUN EL METODO ATACAR QUE TIENE CADA UNO DE LOS OBJETOS
                    //PERSONAJE.
                    this.contador1++;
                    this.player2[this.p2].vida = this.player1[this.p1].atacar(this.player2[this.p2]);
                    document.getElementById("vidaPersonaje2").innerHTML=this.player2[this.p2].nombre+" ------------- "+this.player2[this.p2].vida+" puntos de vida"
                    document.getElementById("dañoPlayer1").innerHTML=`ha atacado ${this.player1[this.p1].nombre} y ha hecho ${this.player1[this.p1].daño} puntos de daño`
                    document.getElementById("dañoPlayer2").innerHTML=`${this.player2[this.p2].nombre} ha bloqueado ${this.player2[this.p2].armadura + this.player2[this.p2].defensa} puntos`
                    document.getElementById("dañoPlayer2").style.backgroundColor="red";
                    document.getElementById("dañoPlayer1").style.backgroundColor="white";
               
                }else if(turno == 2){
                    
                    this.contador2++;
                    this.player1[this.p1].vida = this.player2[this.p2].atacar(this.player1[this.p1]);
                    document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p1].nombre+" ------------- "+this.player1[this.p1].vida+" puntos de vida"
                    document.getElementById("dañoPlayer2").innerHTML=`ha atacado ${this.player2[this.p2].nombre} y ha hecho ${this.player2[this.p2].daño} puntos de daño`
                    document.getElementById("dañoPlayer1").innerHTML=`${this.player1[this.p1].nombre} ha bloqueado ${this.player1[this.p1].armadura + this.player1[this.p1].defensa} puntos`
                    document.getElementById("dañoPlayer1").style.backgroundColor="red";
                    document.getElementById("dañoPlayer2").style.backgroundColor="white";
                
                }

            }else{ 
        
                if(this.player1[this.p1].vida<=0){ //SI LA VIDA DE UNO DE LOS LUCHADORES ES MENOR O IGUAL QUE 0
                                                    //SE CONSIDERARA MUERTO Y SE LLAMARA AL LUCHADOR DE LA 
                                                    //SIGUIENTE POSICION DEL ARRAY PLAYER 1 O PLAYER 2 INCREMENTANDO
                                                    //LOS CONTADORES p1 y p2 en una unidad.
                    
                    if(this.p1<2){
                    
                        document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p1+1].nombre+" ------------- "+this.player1[this.p1+1].vida+" puntos de vida";
                        document.getElementById("dañoPlayer1").innerHTML=this.player1[this.p1].nombre+" ------------- HA MUERTO!!, entra en combate " +this.player1[this.p1+1].nombre;
                        document.getElementById('personaje1').src= juego.player1[this.p1+1].aspecto;
                    }else{
            
                        document.getElementById('personaje1').style.display="none";
                    }
                    this.p1++;
                }else if(this.player2[this.p2].vida<=0){
                    if(this.p2<2){
                        document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p2+1].nombre+" ------------- "+this.player1[this.p2+1].vida+" puntos de vida";
                        document.getElementById("dañoPlayer2").innerHTML=this.player2[this.p2].nombre+" ------------- HA MUERTO!!, entra en combate " +this.player2[this.p2+1].nombre;
                        document.getElementById('personaje2').src= juego.player2[this.p2+1].aspecto;
                    }else{
                        document.getElementById('personaje2').style.display="none";
                    }
                        this.p2++;
                    }
            }
        }else{
        
            this.estadisticas();
        }
    },
    //UNA VEZ LOS TRES LUCHADORES DE UNO DE LOS PLAYERS HAYAN MUERTO, SEDARA POR CONCLUIDA LA BATALLA 
    //ENTENDIENDOSE COMO PERDEDOR AL PLAYER CUYO CONTADOR p SEA MAYOR AL NUMERO DE LUCHADRES DEL ARRAY,
    //EN ESTE CASO 3. SE PROCEDERA A IR A LA PANTALLA DE ESTADISTICAS DONDE SE MUESTRA UNA BREVE RELACION
    //DE LOS GOLPES QUE HAN PROPINADO CADA UNO DE LOS PLAYERS.

    estadisticas(){
 
        document.getElementById("botonJugar").style.display="block";
        document.getElementById("seccion1").style.display="none";
        document.getElementById("seccion3").style.display="none";
        document.getElementById("seccion4").style.display="grid";
        document.getElementById("seccion2").style.display="grid";
        document.getElementById("seleccionPersonajes").style.display="none";
        
        if(this.p1>2){

            alert(`   
            --------------------------
            |      ESTADISTICAS      |
            --------------------------
            HA GANADO PLAYER 1
            player1 ha atacado ${this.contador1} veces
            player2 ha atacado ${this.contador2} veces`);
           
          
        }else if(this.p2>2){
      
            alert(`   
            --------------------------
            |      ESTADISTICAS       |
            --------------------------
            HA GANADO PLAYER 2
            Player1 ha atacado ${this.contador1} veces
            Player2 ha atacado ${this.contador2} veces`);
           
        }
        //SE VUELVEN A INICIALIZAR PARA DEJARLOS LISTOS PARA UNA NUEVA PARTIDA.
        this.player1=[];
        this.player2=[];
        this.p1=0;
        this.p2=0;
        this.contador1=0;
        this.contador2=0;
    
    }

}