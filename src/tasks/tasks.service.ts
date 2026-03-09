import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
@Injectable()
export class TasksService {
  private tasks : any[] = [];

  create(dto: CreateTaskDto) {
    const task = { id: Date.now().toString(), done: false, ...dto };
    this.tasks.push(task);
    return task;
  }

  findByProject(projectId: string) {
    return this.tasks.filter(t => t.projectId === projectId);
  }

  update(id: string, dto: UpdateTaskDto) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new NotFoundException('Task not found');
    Object.assign(task, dto);
    return task;
  }

  delete(id: string) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException('Task not found');
    this.tasks.splice(index, 1);
    return { message: 'Deleted' };
  }
}