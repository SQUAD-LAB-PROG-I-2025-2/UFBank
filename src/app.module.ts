import { Module } from '@nestjs/common';
import { UsersModule } from './interface/users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
