import { Injectable } from '@nestjs/common';

type Project = {
  id: string;
  name: string;
  owner: string;
};

@Injectable()
export class ProjectsService {

  private projects: Project[] = [];

  findByUser(email: string) {
    return this.projects.filter(project => project.owner === email);
  }

  create(project: Project) {
    this.projects.push(project);
    return project;
  }

  findOne(id: string, email: string) {
    return this.projects.find(
      project => project.id === id && project.owner === email
    );
  }

}