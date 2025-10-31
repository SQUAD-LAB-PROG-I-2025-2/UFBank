import { User } from '../../../domain/entities/user.entity';

export class FindAllUsersUseCase {
  constructor(private users: User[]) {}

  execute(): User[] {
    return this.users;
  }
}
