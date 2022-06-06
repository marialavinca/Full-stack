export class Direccion {
    private _calle: string;
    private _numero: string;
    private _piso: string;
    private _letra: string;
    private _codigoPostal: string;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: string, piso: string, letra: string, codigoPostal: string, poblacion: string, provincia: string) {
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

    set establecerCalle(valor: string) {
        this._calle = valor;
    }

    get obtenerNumero() {
        return this._numero;
    }

    set establecerNumero(valor: string) {
        this._numero = valor;
    }

    get obtenerPiso() {
        return this._piso;
    }

    set establecerPiso(valor: string) {
        this._piso = valor;
    }

    get obtenerLetra() {
        return this._letra;
    }

    set establecerLetra(valor: string) {
        this._letra = valor;
    }

    get obtenerCodigoPostal() {
        return this._codigoPostal;
    }

    set establecerCodigoPostal(valor: string) {
        this._codigoPostal = valor;
    }

    get obtenerPoblacion() {
        return this._poblacion;
    }

    set establecerPoblacion(valor: string) {
        this._poblacion = valor;
    }

    get obtenerProvincia() {
        return this._provincia;
    }

    set establecerProvincia(valor: string) {
        this._provincia = valor;
    }
}