// Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)

class Escuela {
    codigo: number;
    nombre: string;
    direccion: string;
    cursos: Curso[];

    constructor(codigo: number, nombre: string, direccion: string, cursos: Curso[]) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cursos = cursos;
    };

    
    agregarCurso (curso: Curso): void{
        this.cursos.push(curso);
    }

} 

class Curso {
    codigo: number;
    nombre: string;
    profesor: string;
    alumnnos: Alumno[];


    constructor(codigo: number, nombre: string, profesor: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnnos = [];
    };

    
    agregarAlumno(alumno: Alumno): void {
        this.alumnnos.push(alumno);
    }

}

class Alumno {
    dni: number;
    nombre: string;
    apellido: string;
    edad: number;
};
