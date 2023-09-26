import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/prisma/paginator';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(userData: CreateUserDto) {
    return this.prisma.user.create({ data: userData });
  }

  findAll(params: {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    page?: number;
  }) {
    const { where, orderBy, page } = params;
    return paginate(this.prisma.user, { where, orderBy }, { page });
  }

  // findAll(request: any) {
  //   return this.prisma.user.findMany({ where: { ...request.query } });
  // }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserData: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserData },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
