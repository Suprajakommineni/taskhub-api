import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

  findAll() {
    return "All projects";
  }

  findOne(id: string) {
    return `Project ${id}`;
  }

}