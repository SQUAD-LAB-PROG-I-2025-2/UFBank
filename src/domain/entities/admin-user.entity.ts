import { User } from './user.entity';

export class AdminUser extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    public department: string,
    public position: string,
    public employeeCode: string,
  ) {
    super(id, name, email, password, phone, 'admin');
  }
}
