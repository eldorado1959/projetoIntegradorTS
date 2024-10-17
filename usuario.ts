class Usuario {
    private _idUsuario: number;
    private _nome: string;
    private _telefone: string;
    private _cpf: string;

    constructor(idUsuario: number, nome: string, telefone: string, cpf: string) {
        this._idUsuario = idUsuario;
        this._nome = nome;
        this._telefone = telefone;
        this._cpf = cpf;
    }

    // Getters
    get idUsuario(): number {
        return this._idUsuario;
    }

    get nome(): string {
        return this._nome;
    }

    get telefone(): string {
        return this._telefone;
    }

    get cpf(): string {
        return this._cpf;
    }

    // Setters
    set idUsuario(id: number) {
        this._idUsuario = id;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }
}
