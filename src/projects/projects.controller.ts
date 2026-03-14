import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('projects')
@ApiBearerAuth()
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOperation({ summary: 'Get all projects' })
  @ApiResponse({ status: 200, description: 'List of all projects' })
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @ApiOperation({ summary: 'Create a new project' })
  @ApiResponse({ status: 201, description: 'Project created successfully' })
  @Post()
  create(@Body() body) {
    return this.projectsService.create(body);
  }
}