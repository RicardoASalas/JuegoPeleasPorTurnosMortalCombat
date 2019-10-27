class luchador{
    constructor(damage,armor){
        this.vida = 100;
        this.daño = damage;
        this.armadura = armor;
    }
    atacar(enemigo){
        
        return enemigo.vida-(this.daño-enemigo.armadura);
    }
}
let turno;
player1= new luchador(30,30);
player2= new luchador(40,25);
let contador1=0;
let contador2=0;
do{
    console.log(`vida de player1: ${player1.vida} ------------------- vida de player2: ${player2.vida}`)
    turno=Number(Math.floor(Math.random()*2+1));
    
    console.log("el turno es del jugador: player"+turno)
    
    if (turno == 1){
        contador1++;
        player2.vida = player1.atacar(player2);
        console.log(`ha atacado player1 y ha hecho ${player1.daño-player2.armadura} puntos de daño`)
        console.log("la vida de player2 ahora es de " +player2.vida);

    }else if(turno == 2){
        contador2++;
        player1.vida = player2.atacar(player1);
        console.log(`ha atacado player2 y ha hecho ${player2.daño-player1.armadura} puntos de daño`)
        console.log("la vida de player1 ahora es de "+player1.vida);

    }
    


}while(player1.vida > 0 && player2.vida > 0)
console.log("----------------------------");
if(player1.vida<=0){
    console.log(`HA GANADO player2`);
}else if(player2.vida<=0){
    console.log(`HA GANADO player1`);
}
console.log("player1 ha atacado "+contador1+" veces");

console.log("player2 ha atacado "+contador2+" veces");
