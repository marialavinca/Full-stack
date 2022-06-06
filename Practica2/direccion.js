export class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get obtenerCalle() {
        return this._calle;
    }
    set establecerCalle(valor) {
        this._calle = valor;
    }
    get obtenerNumero() {
        return this._numero;
    }
    set establecerNumero(valor) {
        this._numero = valor;
    }
    get obtenerPiso() {
        return this._piso;
    }
    set establecerPiso(valor) {
        this._piso = valor;
    }
    get obtenerLetra() {
        return this._letra;
    }
    set establecerLetra(valor) {
        this._letra = valor;
    }
    get obtenerCodigoPostal() {
        return this._codigoPostal;
    }
    set establecerCodigoPostal(valor) {
        this._codigoPostal = valor;
    }
    get obtenerPoblacion() {
        return this._poblacion;
    }
    set establecerPoblacion(valor) {
        this._poblacion = valor;
    }
    get obtenerProvincia() {
        return this._provincia;
    }
    set establecerProvincia(valor) {
        this._provincia = valor;
    }
}
