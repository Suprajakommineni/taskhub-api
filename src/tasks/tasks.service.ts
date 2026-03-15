import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTaskDto & { projectId: number }) {  // ✅ number
    return this.prisma.task.create({
      data: {
        title: dto.title,
        done: false,
        projectId: dto.projectId,
      },
    });
  }

  findByProject(projectId: number) {  // ✅ number
    return this.prisma.task.findMany({
      where: { projectId },
    });
  }

  async update(id: number, dto: UpdateTaskDto) {  // ✅ number
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    return this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: number) {  // ✅ number
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    await this.prisma.task.delete({ where: { id } });
    return { message: 'Deleted' };
  }
}