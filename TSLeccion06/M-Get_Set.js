//let persona3 = new Persona("Carla", "Ponce");  //esto no se debe hacer: Persona is not defined
    
class Persona{// CLASE PADRE
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido= apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    nombrecompleto(){
        return this._nombre+', '+this._apellido;
    }
    // Sobreescribiedo el metodo de la clase padre(Object)
    toString(){ //Regresa un String
        //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
        //El metodo que se ejecuta depende si es una refrencia de tipo padre o hija
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(departamento, nombre, apellido){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura 
    nombrecompleto(){
        return super.nombrecompleto()+', '+this._departamento;
    }

}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);

// LLamamos con metodo get
console.log(persona1.nombre);
console.log(persona2.nombre);


// usamos el metodo set
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
persona1.apellido = 'Tapia';
console.log(persona1.apellido);


//Creamos un objeto de tipo empleado

let empleado1 = new Empleado('Sistemas', 'Maria', 'Gimenez' );
console.log(empleado1)
console.log(empleado1.nombre)
console.log(empleado1.apellido)
console.log(empleado1.departamento)
console.log(persona1.nombrecompleto());

//Object.prototype.toString  // Esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());


// persona1.saludar(); no se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Atributo no estatico

console.log(persona1.email); // con el objeto si
console.log(empleado1.email); // con herencia si 
console.log(Persona.email); // con la clase no podemos acceder ya q no es estatico