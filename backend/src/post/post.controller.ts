import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';
import type { JwtUser } from 'src/interface.type';
import { PaginationDto } from './dto/pagination.dto';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/my')
  getMe(@Req() req: JwtUser) {
    return this.postService.getMyPosts(req.user.id);
  }

  @Get('/posts')
  getAllPosts(@Query() paginationDto: PaginationDto) {
    return this.postService.getAllPosts(paginationDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Body('content') content: string, @Req() req: JwtUser) {
    const user = await this.usersService.getUser(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.postService.createPost(content, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getPosts(@Param('id') id: string) {
    return this.postService.getPosts(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.postService.deletePost(Number(id));
  }
}
