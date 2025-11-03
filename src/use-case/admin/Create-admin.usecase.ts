import { AdminRepository } from '../../infra/repositories/admin.repository';
import { Admin } from '../../domain/entities/admin_user.entity';

export class CreateAdminUseCase {
  constructor(private repo: AdminRepository) {}

  execute(data: Omit<Admin, 'id' | 'criadoEm' | 'atualizadoEm'>) {
    return this.repo.create(data);
  }
}
