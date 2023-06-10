class BolaDeNieve {
    constructor(nombre, edad, color) {
      this.nombre = nombre;
      this.edad = edad;
      this.color = color;
      this.estado = "feliz";
    }
  
    maullar() {
      console.log("¡Miau! Soy " + this.nombre + " y quiero jugar.");
    }
  
    dormir() {
      console.log(this.nombre + " está durmiendo. Zzz...");
    }
  
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
      console.log(this.nombre + " está ahora " + nuevoEstado + ".");
    }
  }
  
  const miGato = new BolaDeNieve("BolaDeNieve", 2, "blanco");
  console.log(miGato);
  miGato.maullar();
  miGato.dormir();
  miGato.cambiarEstado("aburrido");
  