import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../domain/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body() body: { name: string; email: string; password: string; role: 'admin' | 'client' }
  ): User {
    return this.usersService.create(body.name, body.email, body.password, body.role);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): User | undefined {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updates: Partial<User>): User | undefined {
    return this.usersService.update(id, updates);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.usersService.remove(id);
  }
}
