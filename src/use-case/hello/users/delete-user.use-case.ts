import { User } from '../../../domain/entities/user.entity';

export class DeleteUserUseCase {
  constructor(private users: User[]) {}

  execute(id: string): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
