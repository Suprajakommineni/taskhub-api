import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Create a task in a project' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  @Post('projects/:projectId/tasks')
  create(@Param('projectId') projectId: string, @Body() dto: CreateTaskDto) {
    return this.tasksService.create({ ...dto, projectId });
  }

  @ApiOperation({ summary: 'Get all tasks in a project' })
  @ApiResponse({ status: 200, description: 'List of tasks' })
  @Get('projects/:projectId/tasks')
  findAll(@Param('projectId') projectId: string) {
    return this.tasksService.findByProject(projectId);
  }

  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  @Patch('tasks/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  @Delete('tasks/:id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}