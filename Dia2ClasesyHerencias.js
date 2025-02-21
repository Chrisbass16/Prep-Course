class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    hacerSonido(){
        console.log(`${this.nombre} hace un sonido, y tiene ${this.edad} años de edad`);
    }
}

class Gato extends Animal{
    maullar(){
        super.hacerSonido();
        console.log(`Miau miau!`);
    }
}
const miGata1 = new Gato ("Lucrecia", 12);
miGata1.maullar();