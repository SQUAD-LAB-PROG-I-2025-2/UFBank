import { User } from './user.entity';

export class ClientUser extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    public cpf: string,
    public address: string,
    public dateOfBirth: string,
    public occupation?: string,
  ) {
    super(id, name, email, password, phone, 'client');
  }
}
