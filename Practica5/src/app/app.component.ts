import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Persona } from './models/persona';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class AppComponent {

  inputs: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-zÑñ ]{3,100}")]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-zÑñ ]{3,100}")]),
    edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(125), Validators.pattern("[0-9]{1,3}")]),
    dni: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]{8}[A-Za-zÑñ]{1}")]),
    cumpleanos: new FormControl('', [Validators.required]),
    colorfav: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-zÑñ ]{3,100}")])
  });
  gender: FormGroup = new FormGroup({
    sexo: new FormControl('Hombre')
  });
  
  lista!: Array<Persona>;

  constructor() {
    this.lista = [
      new Persona(
        "Juan",
        "Jimenez Diaz",
        45,
        "13619405S",
        "1977-10-10",
        "Azul",
        "Hombre"
      ),
      new Persona(
        "Lucia",
        "Arias Lobato",
        23,
        "72135468M",
        "1999-05-01",
        "Verde",
        "Mujer"
      ),
      new Persona(
        "Mario",
        "Garcia Ruiz",
        67,
        "13151923Z",
        "1955-04-13",
        "Rojo",
        "Hombre"
      )
    ];
  }

  ngOnInit(): void {
 
  }


  registrar() {
    let add: boolean = true;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.inputs.value.dni == this.lista[i].dni) { //una persona con el mismo dni no tiene sentido
        add = false;
      }
    }
    if (add) {
      let persona = new Persona(
        this.inputs.value.nombre,
        this.inputs.value.apellidos,
        this.inputs.value.edad,
        this.inputs.value.dni,
        this.inputs.value.cumpleanos,
        this.inputs.value.colorfav,
        this.gender.value.sexo
      );

      this.lista.push(persona);
    } else {
      alert('Esta persona ya existe, o al menos ese DNI. Un mismo DNI no puede estar asociado a dos personas distintas.');
    } 
  }

  limpiar() {
    this.inputs.controls['nombre'].reset('');
    this.inputs.controls['apellidos'].reset('');
    this.inputs.controls['edad'].reset('');
    this.inputs.controls['dni'].reset('');
    this.inputs.controls['cumpleanos'].reset('');
    this.inputs.controls['colorfav'].reset('');
    this.gender.controls['sexo'].reset('Hombre');
  }

  editar(posicion: number) {
    this.inputs.controls['nombre'].reset(this.lista[posicion].nombre);
    this.inputs.controls['apellidos'].reset(this.lista[posicion].apellidos);
    this.inputs.controls['edad'].reset(this.lista[posicion].edad);
    this.inputs.controls['dni'].reset(this.lista[posicion].dni);
    this.inputs.controls['cumpleanos'].reset(this.lista[posicion].cumpleanos);
    this.inputs.controls['colorfav'].reset(this.lista[posicion].colorFavorito);
    this.gender.controls['sexo'].reset(this.lista[posicion].sexo);
  }

  guardarEdicion(posicion: number) {
    let add: boolean = true;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.inputs.value.dni == this.lista[i].dni) {
        add = false;
      }
    }
    if (this.inputs.value.dni == this.lista[posicion].dni) {
      add = true;
    }
    if (add) {
      if (this.inputs.value.nombre != '') {
        this.lista[posicion].nombre = this.inputs.value.nombre;
      }
      if (this.inputs.value.apellidos != '') {
        this.lista[posicion].apellidos = this.inputs.value.apellidos;
      }
      if (this.inputs.value.edad != '') {
        this.lista[posicion].edad = this.inputs.value.edad;
      }
      if (this.inputs.value.dni != '') {
        this.lista[posicion].dni = this.inputs.value.dni;
      }
      if (this.inputs.value.cumpleanos != '') {
        this.lista[posicion].cumpleanos = this.inputs.value.cumpleanos;
      }
      if (this.inputs.value.colorfav != '') {
        this.lista[posicion].colorFavorito = this.inputs.value.colorfav;
      }
      if (this.gender.value.sexo != '') {
        this.lista[posicion].sexo = this.gender.value.sexo;
      }
    } else {
      alert('Esta persona ya existe, o al menos ese DNI. Un mismo DNI no puede estar asociado a dos personas distintas.');
    }
  }

  obtenerFecha(fecha: string) {
    var [ano, mes, dia] = fecha.split('-');
    return dia+'/'+mes+'/'+ano;

  }

  borrar(posicion: number) {
    this.lista.splice(posicion, 1);
  }

  get nombre() {
    return this.inputs.get('nombre');
  }

  get apellidos() {
    return this.inputs.get('apellidos');
  }

  get edad() {
    return this.inputs.get('edad');
  }

  get dni() {
    return this.inputs.get('dni');
  }

  get cumpleanos() {
    return this.inputs.get('cumpleanos');
  }

  get colorfav() {
    return this.inputs.get('colorfav');
  }

}
