// .1 Introducción a los Objetos en JavaScript 
let x = 10; //variable de tipo primitiva
console.log(x.length); undefined

//Objeto
let persona = {
    nombre : "Dario",
    apellido: "Carrizo",
    email:"dariocarrizo32@gmail.com",
    edad: 52,
    nombrecompleto: function({ // Esto es un metodo o funcionen javascript
        return this.nombre+'' + this.apellido;
    })

}
console.log(persona.nombre); Dario
console.log(persona.apellido); Carrizo
console.log(persona.email); dariorrizo32@gmail.com
console.log(persona.edad);52
console.log(persona);{nombre: dario, apellido: carrizo, email: dariocarrizo32@gmail.com
console.log(persona.nombrecompleto()); dario carrizo

let persona2 = new Object(); //Debe crear un nuevo objeto en la memoria.
persona2.nombre = 'juan',
persona2.direcccion = 'salda 12';
persona2.telefono='00000000';
console.log(persona2.telefono); 0000000000

//Propiedades
console.log(persona['apellido']); //accedemos como si fuera un arreglo

// for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
    }
    console.log('cambiamos y eliminamos un error')
    persona.apellida ='Betancud';  
    delete persona.apellido; // Cambiamos dinamicamente el valor del Objeto
    console.log(persona); { nombre: Carlos, apellido: Betancud, emal:  etcetc@MediaList.com}

    //Numero 4: La funcion objet.values
    console.log('distintas formas de imprir un objeto: forma 4');
    let personaString = JSON.stringify(persona);
    console.log(personaString);

    //faltan tres ejemplos a pasar del untimo video de la leccion

    //Leccion 5
    // uso de Prototype
    persona.prototype.telefono = '604563093';
    console.log(padre); ... na3 (nombre: 'dario ', apellido: 'carrizo'. email: 'dariocarrizo32@gmail.com')
    console.log(madre.telefono); 2604012070
    madre.telefono = '2804012070';
    console.log(madre.telefono);

// uso del call
let persona4 ={ func is not definde
    nombre = 'Juan',
    apellido : 'perez',
    nombrecompleto2 = function(titulo,telefono){
        return titulo+':' '+this.nombre+' '+this.apellido+' '+telefono;'
    }
}

let persona5 ={
    nombre: 'carlos',
    apellido: 'Lara',
}

console.log(persona4.nombrecompleto2('Lic.', '26018989802')); Lic. : Juan Perez 8483030
console.log(persona4.nombrecompleto2.call,.(persona5)); undefinid : Carlos Lara undefinid

// Metodo Apply
let arreglo= ['Ing.', '12345'];
console.log(persona4.nombrecompleto.apply(persona5,arreglo)); innerHeight.: Carlos Lara 12345 


