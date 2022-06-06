export enum TipoTelefono { Personal = "personal", Empresa = "empresa"}

export class Telefono {
    private _tipoTelefono: TipoTelefono;
    private _numeroTelefono: string;

    constructor(tipoTelefono: TipoTelefono, numeroTelefono: string) {
        this._tipoTelefono = tipoTelefono;
        this._numeroTelefono = numeroTelefono;
    }

    get obtenerTipoTelefono() {
        return this._tipoTelefono;
    }

    set establecerTipoTelefono(valor: TipoTelefono) {
        this._tipoTelefono = valor;
    }

    get obtenerNumeroTelefono() {
        return this._numeroTelefono
    }

    set establecerNumeroTelefono(valor: string) {
        this._numeroTelefono = valor;
    }
}