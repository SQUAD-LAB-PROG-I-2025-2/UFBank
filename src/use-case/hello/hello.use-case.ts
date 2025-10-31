import { HelloMessage } from '../../domain/entities/message.entity';

export class HelloUseCase {
  execute(): HelloMessage {
    return new HelloMessage('Hello World');
  }
}
