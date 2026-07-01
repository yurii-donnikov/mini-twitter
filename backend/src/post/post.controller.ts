import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Delete,
  Req,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';
import type { JwtUser } from 'src/interface.type';
import { PaginationDto } from './dto/pagination.dto';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/my')
  getMyPosts(@Req() req: JwtUser) {
    return this.postService.getMyPosts(req.user.id);
  }

  @Get()
  getAllPosts(@Query() paginationDto: PaginationDto) {
    return this.postService.getAllPosts(paginationDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Body('content') content: string, @Req() req: JwtUser) {
    return this.postService.createPost(content, req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user/:id')
  getPostsByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getPostsByUserId(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deletePost(id);
  }
}
