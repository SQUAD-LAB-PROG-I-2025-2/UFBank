export class ClientUser {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public balance: number = 0, // saldo inicial
  ) {}
}
