import { AdminRepository } from '../../infra/repositories/admin.repository';
import { Admin } from '../../domain/entities/admin_user.entity';
import { NotFoundException } from '@nestjs/common';

export class UpdateAdminUseCase {
  constructor(private repo: AdminRepository) {}

  execute(id: string, data: Partial<Omit<Admin, 'id' | 'criadoEm' | 'atualizadoEm'>>): Admin {
    const admin = this.repo.update(id, data);
    if (!admin) {
        throw new NotFoundException(`Administrador com id ${id} não encontrado`)
    }
    return admin
  }

}
