import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  findByUser(userId: number) {
    return this.prisma.project.findMany({
      where: { ownerId: userId },
      select: {
        id: true,
        name: true,
        ownerId: true,
      },
    });
  }

  create(name: string, ownerId: number) {
    return this.prisma.project.create({
      data: {
        name,
        ownerId,
      },
    });
  }
}