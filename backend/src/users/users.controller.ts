import { Controller, Get, Delete, Param, Body, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/users')
  getUsers(): any {
    return this.usersService.getUsers();
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(Number(id), dto);
  }
}
