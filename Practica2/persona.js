export var Sexo;
(function (Sexo) {
    Sexo["Femenino"] = "femenino";
    Sexo["Masculino"] = "masculino";
})(Sexo || (Sexo = {}));
export var Color;
(function (Color) {
    Color["Rojo"] = "rojo";
    Color["Azul"] = "azul";
    Color["Verde"] = "verde";
})(Color || (Color = {}));
export class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    set establecerNombre(valor) {
        this._nombre = valor;
    }
    get obtenerApellidos() {
        return this._apellidos;
    }
    set establecerApellidos(valor) {
        this._apellidos = valor;
    }
    get obtenerEdad() {
        return this._edad;
    }
    set establecerEdad(valor) {
        this._edad = valor;
    }
    get obtenerDni() {
        return this._dni;
    }
    set establecerDni(valor) {
        this._dni = valor;
    }
    get obtenerCumpleanos() {
        return this._cumpleanos;
    }
    set establecerCumpleanos(valor) {
        this._cumpleanos = valor;
    }
    get obtenerColorFavorito() {
        return this._colorFavorito;
    }
    set establecerColorFavorito(valor) {
        this._colorFavorito = valor;
    }
    get obtenerSexo() {
        return this._sexo;
    }
    set establecerSexo(valor) {
        this._sexo = valor;
    }
    get obtenerNotas() {
        return this._notas;
    }
    set establecerNotas(valor) {
        this._notas = valor;
    }
    get obtenerDireccionPersona() {
        return this._direcciones;
    }
    set establecerDireccionPersona(objeto) {
        this._direcciones = objeto;
    }
    get obtenerMailPersona() {
        return this._mails;
    }
    set establecerMailPersona(objeto) {
        this._mails = objeto;
    }
    get obtenerTelefonoPersona() {
        return this._telefonos;
    }
    set establecerTelefonoPersona(objeto) {
        this._telefonos = objeto;
    }
}
