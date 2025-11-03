import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AdminRepository } from '../../infra/repositories/admin.repository';
import { CreateAdminUseCase } from '../../use-case/admin/Create-admin.usecase';
import { ListAdminUseCase } from '../../use-case/admin/findAll-admin.usecase';
import { ListByIdAdminUseCase } from '../../use-case/admin/findById-admin.usecase';
import { UpdateAdminUseCase } from '../../use-case/admin/update-admin.usecase';
import { DeleteAdminUseCase } from '../../use-case/admin/delete-admin.usecase';
import { Admin } from '../../domain/entities/admin_user.entity';

@Controller('admin-users')
export class AdminController {
  private repo = new AdminRepository();

  private createUseCase: CreateAdminUseCase;
  private listUseCase: ListAdminUseCase;
  private findByIdUseCase: ListByIdAdminUseCase;
  private updateUseCase: UpdateAdminUseCase;
  private deleteUseCase: DeleteAdminUseCase;

  constructor() {
    this.createUseCase = new CreateAdminUseCase(this.repo);
    this.listUseCase = new ListAdminUseCase(this.repo);
    this.findByIdUseCase = new ListByIdAdminUseCase(this.repo);
    this.updateUseCase = new UpdateAdminUseCase(this.repo);
    this.deleteUseCase = new DeleteAdminUseCase(this.repo);
  }

  @Post()
  create(@Body() data: Omit<Admin, 'id' | 'criadoEm' | 'atualizadoEm'>) {
    return this.createUseCase.execute(data);
  }

  @Get()
  findAll() {
    return this.listUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findByIdUseCase.execute(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<Admin, 'id' | 'criadoEm' | 'atualizadoEm'>>,
  ) {
    return this.updateUseCase.execute(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
