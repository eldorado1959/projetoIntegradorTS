class Localizacao {
    private _idLocalizacao: number;
    private _endereco: string;
    private _cidade: string;
    private _estado: string;
    private _cep: string;

    constructor(idLocalizacao: number, endereco: string, cidade: string, estado: string, cep: string) {
        this._idLocalizacao = idLocalizacao;
        this._endereco = endereco;
        this._cidade = cidade;
        this._estado = estado;
        this._cep = cep;
    }

    // Getters
    get idLocalizacao(): number {
        return this._idLocalizacao;
    }

    get endereco(): string {
        return this._endereco;
    }

    get cidade(): string {
        return this._cidade;
    }

    get estado(): string {
        return this._estado;
    }

    get cep(): string {
        return this._cep;
    }

    // Setters
    set idLocalizacao(id: number) {
        this._idLocalizacao = id;
    }

    set endereco(endereco: string) {
        this._endereco = endereco;
    }

    set cidade(cidade: string) {
        this._cidade = cidade;
    }

    set estado(estado: string) {
        this._estado = estado;
    }

    set cep(cep: string) {
        this._cep = cep;
    }
}
