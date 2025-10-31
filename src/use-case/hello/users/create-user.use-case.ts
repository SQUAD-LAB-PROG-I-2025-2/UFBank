import { User } from '../../../domain/entities/user.entity';
import { ClientUser } from '../../../domain/entities/client-user.entity';
import { AdminUser } from '../../../domain/entities/admin-user.entity';

export class CreateUserUseCase {
  constructor(private users: User[] = []) {}

  execute(data: any): User {
    // lightweight id generator to avoid external dependency issues
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`;

    let user: User;

    if (data.role === 'client') {
      user = new ClientUser(
        id,
        data.name,
        data.email,
        data.password,
        data.phone,
        data.cpf,
        data.address,
        data.dateOfBirth,
        data.occupation,
      );
    } else {
      user = new AdminUser(
        id,
        data.name,
        data.email,
        data.password,
        data.phone,
        data.department,
        data.position,
        data.employeeCode,
      );
    }

    this.users.push(user);
    return user;
  }
}
