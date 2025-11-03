import { AdminRepository } from '../../infra/repositories/admin.repository';
import { Admin } from '../../domain/entities/admin_user.entity';

export class ListAdminUseCase {
  constructor(private repo: AdminRepository) {}

  execute(): Admin[] {
    return this.repo.findAll();
  }
}
