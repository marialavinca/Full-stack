export enum TipoMail { Personal = "personal", Empresa = "empresa" }

export class Mail {
    private _tipoMail: TipoMail;
    private _direccionMail: string;

    constructor(tipoMail: TipoMail, direccionMail: string) {
        this._tipoMail = tipoMail;
        this._direccionMail = direccionMail;
    }

    get obtenerTipoMail() {
        return this._tipoMail;
    }

    set establecerTipoMail(valor: TipoMail) {
        this._tipoMail = valor;
    }

    get obtenerDireccionMail() {
        return this._direccionMail;
    }

    set establecerDireccionMail(valor: string) {
        this._direccionMail = valor;
    }
}