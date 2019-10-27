let juego={
    player1:[],
 
    player2:[],

    p1:0,

    p2:0,

    contador1:0,

    contador2:0,
    
    crearEquipos(person){
        console.log(this.player1.length);
        console.log(this.player2.length);
    if(this.player1.length < 3 )
    {
        switch(person){
            case 'johnnyCage':
            
                johnnyCage = new personaje('Johnny Cage', 25 ,7 ,3 ,'imagenes/johnnyCage1.gif');
                this.player1.push(johnnyCage);
                document.getElementById("boton1").style.display="none";
                   
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
        if(this.player1.length==3 && this.player2.length==3){
            //console.log("no se pueden seleccionar mas personajes")
            document.getElementById("botonComenzarJugar").style.display="block";
    
        }
    }
        
    },
    
    jugar(){
       
        // for(i=0;i<3;i++) {
        //     this.player1[i].vida=100;
        //     this.player2[i].vida=100;
        // }
        // p1=0;
        // p2=0;
        let turno;
        // let contador1=0;
        // let contador2=0;
        //do{
            
        //do{
            
           // console.log(`vida de ${this.player1[p1].nombre}: ${this.player1[p1].vida} ------------------- vida de ${this.player2[p2].nombre}: ${this.player2[p2].vida}`)
            turno=Number(Math.floor(Math.random()*2+1));
    
         if(this.p1<3 && this.p2<3){  
            document.getElementById('dañoPlayer1').style.display="flex";
            document.getElementById('dañoPlayer2').style.display="flex";
             document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p1].nombre+" ------------- "+this.player1[this.p1].vida+" puntos de vida"
             document.getElementById("vidaPersonaje2").innerHTML=this.player2[this.p2].nombre+" ------------- "+this.player2[this.p2].vida+" puntos de vida"

             // console.log(this.player1[this.p1].nombre+"---------------vs-------------"+this.player2[this.p2].nombre);
           if(this.player1[this.p1].vida > 0 && this.player2[this.p2].vida > 0){
            if (turno == 1){
                console.log("el turno es del jugador: "+ this.player1[this.p1].nombre)
                this.contador1++;
                this.player2[this.p2].vida = this.player1[this.p1].atacar(this.player2[this.p2]);
                document.getElementById("vidaPersonaje2").innerHTML=this.player2[this.p2].nombre+" ------------- "+this.player2[this.p2].vida+" puntos de vida"
                document.getElementById("dañoPlayer1").innerHTML=`ha atacado ${this.player1[this.p1].nombre} y ha hecho ${this.player1[this.p1].daño} puntos de daño`
                document.getElementById("dañoPlayer2").innerHTML=`${this.player2[this.p2].nombre} ha bloqueado ${this.player2[this.p2].armadura + this.player2[this.p2].defensa} puntos`
                document.getElementById("dañoPlayer2").style.backgroundColor="red";
                document.getElementById("dañoPlayer1").style.backgroundColor="white";
               //console.log(`ha atacado ${this.player1[this.p1].nombre} y ha hecho ${this.player1[this.p1].daño} puntos de daño`)
                //console.log(`${this.player2[this.p2].nombre} ha bloqueado ${this.player2[this.p2].armadura + this.player2[this.p2].defensa} puntos  , su vida ahora es de ${this.player2[this.p2].vida}`);

            }else if(turno == 2){
                console.log("el turno es del jugador: "+ this.player2[this.p2].nombre)
                this.contador2++;
                this.player1[this.p1].vida = this.player2[this.p2].atacar(this.player1[this.p1]);
                document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p1].nombre+" ------------- "+this.player1[this.p1].vida+" puntos de vida"
                document.getElementById("dañoPlayer2").innerHTML=`ha atacado ${this.player2[this.p2].nombre} y ha hecho ${this.player2[this.p2].daño} puntos de daño`
                document.getElementById("dañoPlayer1").innerHTML=`${this.player1[this.p1].nombre} ha bloqueado ${this.player1[this.p1].armadura + this.player1[this.p1].defensa} puntos`
                document.getElementById("dañoPlayer1").style.backgroundColor="red";
                document.getElementById("dañoPlayer2").style.backgroundColor="white";

                //console.log(`ha atacado ${this.player2[this.p2].nombre} y ha hecho ${this.player2[this.p2].daño} puntos de daño`)
                //console.log(`${this.player1[this.p1].nombre} ha bloqueado ${this.player1[this.p1].armadura + this.player1[this.p1].defensa} puntos  , su vida ahora es de ${this.player1[this.p1].vida}`);

            }

        }else{ 
        
           if(this.player1[this.p1].vida<=0){
                if(this.p1<2){
                    console.log(this.player1[this.p1].nombre+(" ha muerto, entra en combate " +this.player1[this.p1+1].nombre));
                    document.getElementById("vidaPersonaje1").innerHTML=this.player1[this.p1].nombre+" ------------- HA MUERTO!!";
                    document.getElementById('personaje1').src= juego.player1[this.p1+1].aspecto;
                }else{
                    console.log(this.player1[this.p1].nombre+(" ha muerto"));
                    document.getElementById('personaje1').style.display="none";
                }
                this.p1++;
            }else if(this.player2[this.p2].vida<=0){
                if(this.p2<2){
                    console.log(this.player2[this.p2].nombre+(" ha muerto, entra en combate " +this.player2[this.p2+1].nombre));
                    document.getElementById("vidaPersonaje2").innerHTML=this.player2[this.p2].nombre+" ------------- HA MUERTO!!";
                    document.getElementById('personaje2').src= juego.player2[this.p2+1].aspecto;
                }else{
                    console.log(this.player2[this.p2].nombre+(" ha muerto"));
                    document.getElementById('personaje2').style.display="none";
                }
                this.p2++;
            }
          }
        }else{
        
            this.estadisticas();
        }
        },

    estadisticas(){

        document.getElementById("estadistica").style.display="block";
        document.getElementById("botonJugar").style.display="block";
        document.getElementById("seccion1").style.display="none";
        document.getElementById("seccion3").style.display="none";
        document.getElementById("seccion4").style.display="grid";
        document.getElementById("seccion2").style.display="grid";
        
        //console.log("----------------------------");
        if(this.p1>2){
      
            document.getElementById("linea1").innerHTML=`   --------------------------`;
            document.getElementById("linea2").innerHTML=`   |      ESTADISTICA       |`;
            document.getElementById("linea3").innerHTML=`    -------------------------`;

            document.getElementById("linea4").innerHTML=`      HA GANADO PLAYER 1`;

            document.getElementById("linea5").innerHTML=` player1 ha atacado ${this.contador1} veces`;

            document.getElementById("linea6").innerHTML=` player2 ha atacado ${this.contador2} veces`;
            //console.log(`HA GANADO player2`);
        }else if(this.p2>2){
      
            document.getElementById("linea1").innerHTML=`   --------------------------`;
            document.getElementById("linea2").innerHTML=`   |      ESTADISTICA       |`;
            document.getElementById("linea3").innerHTML=`    -------------------------`;

            document.getElementById("linea4").innerHTML=`       HA GANADO PLAYER 1`;

            document.getElementById("linea5").innerHTML=` player1 ha atacado ${this.contador1} veces`;

            document.getElementById("linea6").innerHTML=` player2 ha atacado ${this.contador2} veces`;
            //console.log(`HA GANADO player1`);
        }
      
     
        this.player1=[];
        this.player2=[];
        this.p1=0;
        this.p2=0;
        //console.log("player1 ha atacado "+this.contador1+" veces");
        //console.log("player2 ha atacado "+this.contador2+" veces");


    }

}