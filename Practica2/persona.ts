import { Telefono, TipoTelefono } from "./Telefono.js"
import { Mail, TipoMail } from "./Mail.js"
import { Direccion } from "./Direccion.js"

export enum Sexo { Femenino = "femenino", Masculino = "masculino" }
export enum Color { Rojo = "rojo", Azul = "azul", Verde = "verde"}

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: string;
    private _colorFavorito: Color;
    private _sexo: Sexo;
    private _direcciones: Direccion;
    private _mails: Mail;
    private _telefonos: Telefono;
    private _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string,
        colorFavorito: Color, sexo: Sexo, direcciones: Direccion, mails: Mail, telefonos: Telefono, notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    get obtenerNombre() {
        return this._nombre;
    }

    set establecerNombre(valor: string) {
        this._nombre = valor;
    }

    get obtenerApellidos() {
        return this._apellidos;
    }

    set establecerApellidos(valor: string) {
        this._apellidos = valor;
    }

    get obtenerEdad() {
        return this._edad;
    }

    set establecerEdad(valor: number) {
        this._edad = valor;
    }

    get obtenerDni() {
        return this._dni;
    }

    set establecerDni(valor: string) {
        this._dni = valor;
    }

    get obtenerCumpleanos() {
        return this._cumpleanos;
    }

    set establecerCumpleanos(valor: string) {
        this._cumpleanos = valor;
    }

    get obtenerColorFavorito() {
        return this._colorFavorito;
    }

    set establecerColorFavorito(valor: Color) {
        this._colorFavorito = valor;
    }

    get obtenerSexo() {
        return this._sexo;
    }

    set establecerSexo(valor: Sexo) {
        this._sexo = valor;
    }


    get obtenerNotas() {
        return this._notas;
    }

    set establecerNotas(valor: string) {
        this._notas = valor;
    }

    get obtenerDireccionPersona() {
        return this._direcciones;
    }

    set establecerDireccionPersona(objeto: Direccion) {
        this._direcciones = objeto;
    }

    get obtenerMailPersona() {
        return this._mails;
    }

    set establecerMailPersona(objeto: Mail) {
        this._mails = objeto;
    }

    get obtenerTelefonoPersona() {
        return this._telefonos;
    }

    set establecerTelefonoPersona(objeto: Telefono) {
        this._telefonos = objeto;
    }
}