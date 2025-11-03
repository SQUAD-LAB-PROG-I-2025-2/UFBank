import { AdminRepository } from '../../infra/repositories/admin.repository';
import { Admin } from '../../domain/entities/admin_user.entity';
import { NotFoundException } from '@nestjs/common';

export class DeleteAdminUseCase {
  constructor(private repo: AdminRepository) {}

  execute(id: string): { message: string } {
    const success = this.repo.delete(id);
    if (!success) {
      throw new NotFoundException(`Administrador com id ${id} não encontrado`);
    }
    return { message: 'Administrador deletado com sucesso' };
  }
}
