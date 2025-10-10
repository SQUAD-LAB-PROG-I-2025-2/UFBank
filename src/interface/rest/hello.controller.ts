import { Controller, Get } from '@nestjs/common';
import { HelloUseCase } from '../../use-case/hello/hello.use-case';

@Controller('hello')
export class HelloController {
  private readonly helloUseCase = new HelloUseCase();

  @Get()
  getHello() {
    return this.helloUseCase.execute();
  }
}
