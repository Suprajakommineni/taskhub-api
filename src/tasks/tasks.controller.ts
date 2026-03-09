import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post('projects/:projectId/tasks')
  create(@Param('projectId') projectId: string, @Body() dto: CreateTaskDto) {
    return this.tasksService.create({ ...dto, projectId });
  }

  @Get('projects/:projectId/tasks')
  findAll(@Param('projectId') projectId: string) {
    return this.tasksService.findByProject(projectId);
  }

  @Patch('tasks/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(id, dto);
  }

  @Delete('tasks/:id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}