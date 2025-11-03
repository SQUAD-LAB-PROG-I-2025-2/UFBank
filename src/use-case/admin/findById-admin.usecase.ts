import { AdminRepository } from '../../infra/repositories/admin.repository';
import { Admin } from '../../domain/entities/admin_user.entity';
import { NotFoundException } from '@nestjs/common';

export class ListByIdAdminUseCase {
  constructor(private repo: AdminRepository) {}

  execute(id: string): Admin {
    const admin = this.repo.findById(id);
    if (!admin) {
        throw new NotFoundException(`Administrador com id ${id} não encontrado`)
    }
    return admin
  }

}
