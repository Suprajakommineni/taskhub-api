import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()             // ← ADD THIS
  findAll() {
    return this.projectsService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.projectsService.create(body);
  }
}