import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './interface/rest/hello.controller';
import { HelloUseCase } from './use-case/hello/hello.use-case';

describe('HelloController', () => {
  let appController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloUseCase],
    }).compile();

    appController = app.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
