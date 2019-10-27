//CLASE PERSONAJE CON PROPIEDADES DE LUCHA, EL CUAL SE VA A USAR PARA INSTANCIAR 9 PERSONAJES 
//DIFERENTES CON VALORES DE ATRIBUTO DIFERENTE.

class personaje{
    constructor(name, damage, defense, armor, picture){
        this.nombre = name;
        this.vida = 100;
        this.daño = damage;
        this.defensa = defense;
        this.armadura = armor;
        this.aspecto = picture;
    }
    atacar(enemigo){
        let daño = this.daño-(enemigo.armadura + enemigo.defensa);
        if (daño < 0){
            daño = 0;
        }
        return enemigo.vida-daño;
    }
}

