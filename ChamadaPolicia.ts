class ChamadaPolicia {
    private _idChamadaPolicia: number;
    private _usuario: Usuario;
    private _localizacao: Localizacao;
    private _tempoResposta: string;
    private _status: string;

    constructor(idChamadaPolicia: number, usuario: Usuario, localizacao: Localizacao, tempoResposta: string, status: string) {
        this._idChamadaPolicia = idChamadaPolicia;
        this._usuario = usuario;
        this._localizacao = localizacao;
        this._tempoResposta = tempoResposta;
        this._status = status;
    }

    // Getters
    get idChamadaPolicia(): number {
        return this._idChamadaPolicia;
    }

    get usuario(): Usuario {
        return this._usuario;
    }

    get localizacao(): Localizacao {
        return this._localizacao;
    }

    get tempoResposta(): string {
        return this._tempoResposta;
    }

    get status(): string {
        return this._status;
    }

    // Setters
    set idChamadaPolicia(id: number) {
        this._idChamadaPolicia = id;
    }

    set usuario(usuario: Usuario) {
        this._usuario = usuario;
    }

    set localizacao(localizacao: Localizacao) {
        this._localizacao = localizacao;
    }

    set tempoResposta(tempo: string) {
        this._tempoResposta = tempo;
    }

    set status(status: string) {
        this._status = status;
    }
}
