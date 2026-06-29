import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async getMyPosts(id: number) {
    const posts = await this.postRepository.findOne({
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

  async createPost(content: string, user: User) {
    const post = this.postRepository.create({
      content,
      author: user,
    });
    return await this.postRepository.save(post);
  }

  async getPosts(id: number) {
    return this.postRepository.find({
      where: {
        author: { id },
      },
    });
  }

  async deletePost(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new Error('post not found');
    }
    await this.postRepository.remove(post);
  }
}
