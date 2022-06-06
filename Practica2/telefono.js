export var TipoTelefono;
(function (TipoTelefono) {
    TipoTelefono["Personal"] = "personal";
    TipoTelefono["Empresa"] = "empresa";
})(TipoTelefono || (TipoTelefono = {}));
export class Telefono {
    constructor(tipoTelefono, numeroTelefono) {
        this._tipoTelefono = tipoTelefono;
        this._numeroTelefono = numeroTelefono;
    }
    get obtenerTipoTelefono() {
        return this._tipoTelefono;
    }
    set establecerTipoTelefono(valor) {
        this._tipoTelefono = valor;
    }
    get obtenerNumeroTelefono() {
        return this._numeroTelefono;
    }
    set establecerNumeroTelefono(valor) {
        this._numeroTelefono = valor;
    }
}
