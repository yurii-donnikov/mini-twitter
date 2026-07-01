import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PaginationDto } from './dto/pagination.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly usersService: UsersService,
  ) {}

  async getMyPosts(id: number) {
    const posts = await this.postRepository.find({
      where: {
        author: { id },
      },
    });
    return posts;
  }

  async getAllPosts(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const [posts, total] = await this.postRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: {
        author: true,
      },

      select: {
        id: true,
        content: true,
        createdAt: true,

        author: {
          id: true,
          username: true,
          email: true,
          avatar: true,
        },
      },

      order: {
        createdAt: 'DESC',
      },
    });
    return {
      data: posts,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async createPost(content: string, userId: number) {
    const user = await this.usersService.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const post = this.postRepository.create({
      content,
      author: user,
    });
    return this.postRepository.save(post);
  }

  async getPostsByUserId(id: number) {
    return this.postRepository.find({
      where: {
        author: { id },
      },
    });
  }

  async deletePost(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    await this.postRepository.remove(post);
  }
}
