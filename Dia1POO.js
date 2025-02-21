class Persona {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    presentacion() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años de edad.`);
    }
}
const Persona1 = new Persona("Chris Lozano", "27");
const Persona2 = new Persona("Dani Banchero", "29");
const Persona3 = new Persona("Nahuel Viola", "37");
Persona1.presentacion();
Persona2.presentacion();
Persona3.presentacion();