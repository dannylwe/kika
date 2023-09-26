import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Req() request) {
    const where = request.query
    const page = +request.query.page < 0 ? 1: +request.query.page
    const orderBy = request.query.orderBy

    delete where.page
    delete where.orderBy
    
    const params = {
      where, page, orderBy
    }
    return this.userService.findAll(params);
  }

  // @Get()
  // findAll(@Req() request) {
  //   // const { where, orderBy, page } = request.params;
  //   // const params = {where, orderBy, page}

  //   return this.userService.findAll(request);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
