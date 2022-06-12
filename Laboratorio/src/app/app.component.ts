import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Socio } from './models/socio';

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
    socio: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern("[0-9]{1,100000}")]), //nº de socio máximo muy grande, no va a haber tantos socios (se reutilizarán números cuando se borren de los registros)
    dni: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]{8}[A-Za-zÑñ]{1}")]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]{9}")])
  });
  gender: FormGroup = new FormGroup({
    sexo: new FormControl('Masculino')
  });
  
  lista!: Array<Socio>;

  constructor() {
    this.lista = [
      new Socio(
        "Juan",
        "Jimenez Diaz",
        0,
        "13619405S",
        "656234568",
        "Masculino"
      ),
      new Socio(
        "Lucia",
        "Arias Lobato",
        1,
        "72135468M",
        "612549863",
        "Femenino"
      ),
      new Socio(
        "Mario",
        "Garcia Ruiz",
        2,
        "13151923Z",
        "600354897",
        "Masculino"
      )
    ];
  }

  ngOnInit(): void {
 
  }


  registrar() {
    let add: boolean = true;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.inputs.value.socio == this.lista[i].socio) {
        add = false;
      }
    }
    if (add) {
      let socio = new Socio(
        this.inputs.value.nombre,
        this.inputs.value.apellidos,
        this.inputs.value.socio,
        this.inputs.value.dni,
        this.inputs.value.telefono,
        this.gender.value.sexo
      );
      this.lista.push(socio);
    } else {
      alert('El número de socio ya existe, debe escoger otro valor para poder registrarlo.');
    } 
  }

  limpiar() {
    this.inputs.controls['nombre'].reset('');
    this.inputs.controls['apellidos'].reset('');
    this.inputs.controls['socio'].reset('');
    this.inputs.controls['dni'].reset('');
    this.inputs.controls['telefono'].reset('');
    this.gender.controls['sexo'].reset('Masculino');
  }

  editar(posicion: number) {

    this.inputs.controls['nombre'].reset(this.lista[posicion].nombre);
    this.inputs.controls['apellidos'].reset(this.lista[posicion].apellidos);
    this.inputs.controls['socio'].reset(this.lista[posicion].socio);
    this.inputs.controls['dni'].reset(this.lista[posicion].dni);
    this.inputs.controls['telefono'].reset(this.lista[posicion].telefono);
    this.gender.controls['sexo'].reset(this.lista[posicion].sexo);
  }

  guardarEdicion(posicion: number) {
    let add: boolean = true;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.inputs.value.socio == this.lista[i].socio) {
        add = false;
      } 
    }
    if (this.inputs.value.socio == this.lista[posicion].socio) {
      add = true;
    }
    if (add) {
      if (this.inputs.value.nombre != '') {
        this.lista[posicion].nombre = this.inputs.value.nombre;
      }
      if (this.inputs.value.apellidos != '') {
        this.lista[posicion].apellidos = this.inputs.value.apellidos;
      }
      if (this.inputs.value.socio != '') {
        this.lista[posicion].socio = this.inputs.value.socio;
      }
      if (this.inputs.value.dni != '') {
        this.lista[posicion].dni = this.inputs.value.dni;
      }
      if (this.inputs.value.telefono != '') {
        this.lista[posicion].telefono = this.inputs.value.telefono;
      }
      if (this.gender.value.sexo != '') {
        this.lista[posicion].sexo = this.gender.value.sexo;
      }
    } else {
      alert('El número de socio ya existe, debe escoger otro valor para poder registrarlo.');
    }
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

  get socio() {
    return this.inputs.get('socio');
  }

  get dni() {
    return this.inputs.get('dni');
  }

  get telefono() {
    return this.inputs.get('telefono');
  }

}
