import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { CreateUserUseCase } from '../../use-case/hello/users/create-user.use-case';
import { FindAllUsersUseCase } from '../../use-case/hello/users/find-all-users.use-case';
import { FindUserByIdUseCase } from '../../use-case/hello/users/find-user-by-id.use-case';
import { UpdateUserUseCase } from '../../use-case/hello/users/update-user.use-case';
import { DeleteUserUseCase } from '../../use-case/hello/users/delete-user.use-case';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(name: string, email: string, password: string, role: 'admin' | 'client'): User {
    // CreateUserUseCase expects a single data object; assemble it here.
    return new CreateUserUseCase(this.users).execute({ name, email, password, role });
  }

  findAll(): User[] {
    return new FindAllUsersUseCase(this.users).execute();
  }

  findById(id: string): User | undefined {
    return new FindUserByIdUseCase(this.users).execute(id);
  }

  update(id: string, updates: Partial<User>): User | undefined {
    return new UpdateUserUseCase(this.users).execute(id, updates);
  }

  remove(id: string): boolean {
    return new DeleteUserUseCase(this.users).execute(id);
  }
}
