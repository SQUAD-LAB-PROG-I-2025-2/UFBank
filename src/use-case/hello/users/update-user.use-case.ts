import { User } from '../../../domain/entities/user.entity';

export class UpdateUserUseCase {
  constructor(private users: User[]) {}

  execute(id: string, updates: Partial<User>): User | undefined {
    const user = this.users.find(u => u.id === id);
    if (!user) return undefined;

    Object.assign(user, updates);
    return user;
  }
}
