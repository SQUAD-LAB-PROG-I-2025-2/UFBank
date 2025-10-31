export abstract class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public phone: string,
    public role: 'admin' | 'client',
    public createdAt: Date = new Date(),
  ) {}
}
