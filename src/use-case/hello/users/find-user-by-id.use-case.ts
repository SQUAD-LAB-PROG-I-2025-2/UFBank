import { User } from '../../../domain/entities/user.entity';

export class FindUserByIdUseCase {
  constructor(private users: User[]) {}

  execute(id: string): User | undefined {
    return this.users.find(u => u.id === id);
  }
}
