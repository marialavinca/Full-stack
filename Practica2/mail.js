export var TipoMail;
(function (TipoMail) {
    TipoMail["Personal"] = "personal";
    TipoMail["Empresa"] = "empresa";
})(TipoMail || (TipoMail = {}));
export class Mail {
    constructor(tipoMail, direccionMail) {
        this._tipoMail = tipoMail;
        this._direccionMail = direccionMail;
    }
    get obtenerTipoMail() {
        return this._tipoMail;
    }
    set establecerTipoMail(valor) {
        this._tipoMail = valor;
    }
    get obtenerDireccionMail() {
        return this._direccionMail;
    }
    set establecerDireccionMail(valor) {
        this._direccionMail = valor;
    }
}
