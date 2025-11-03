import { Module } from '@nestjs/common';
import { AdminModule } from '../rest/admin.module';
import { HelloModule } from '../rest/hello.module';

@Module({
  imports: [AdminModule, HelloModule],
})
export class AppModule {}
