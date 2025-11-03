export class Admin {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public senha: string,
    public cargo: string,
    public criadoEm: Date,
    public atualizadoEm: Date,
  ) {}
}
