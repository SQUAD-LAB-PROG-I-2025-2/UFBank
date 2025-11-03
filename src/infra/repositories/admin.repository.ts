import { Admin } from '../../domain/entities/admin_user.entity';
import { v4 as uuid } from 'uuid';

export class AdminRepository {
  private admins: Admin[] = [];

  create(data: Omit<Admin, 'id' | 'criadoEm' | 'atualizadoEm'>): Admin {
    const admin = new Admin(
      uuid(),
      data.nome,
      data.email,
      data.senha,
      data.cargo,
      new Date(),
      new Date(),
    );
    this.admins.push(admin);
    return admin;
  }

  findAll(): Admin[] {
    return this.admins;
  }

  findById(id: string): Admin | undefined {
    return this.admins.find(a => a.id === id);
  }

  update(id: string, data: Partial<Admin>): Admin | undefined {
    const admin = this.findById(id);
    if (!admin) return undefined;

    Object.assign(admin, data, { atualizadoEm: new Date() });
    return admin;
  }

  delete(id: string): boolean {
    const index = this.admins.findIndex(a => a.id === id);
    if (index === -1) return false;
    this.admins.splice(index, 1);
    return true;
  }
}
