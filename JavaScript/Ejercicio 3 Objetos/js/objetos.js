function Persona (nombre, edad, genero) {
      this.nombre = nombre || "";
      this.nombre = edad || "";
      this.nombre = genero || "";
      Persona.obtDetalles();

}



function Estudiante (curso, grupo) {
  this.base = Persona;
  this.base(nombre, edad, genero);
      this.nombre = curso || "";
      this.nombre = grupo || "";
    
  this.registrar();
}

Estudiante.prototype = new Persona;

function Profesor (asignatura, nivel) {
  this.base = Persona;
  this.base(nombre, edad, genero);
      this.nombre = asignatura || "";
      this.nombre = nivel || "";
  asignar();
}

Profesor.prototype = new Persona;


var Prueba = new Profesor("Mate, Avanzado",
                            ["SoyUnNombre", "SoyUnApellido", "m"]);


obtDetalles(console.log("1"));
obtDetalles(console.log(Prueba))