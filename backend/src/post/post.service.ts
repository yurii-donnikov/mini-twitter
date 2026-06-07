import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

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

  async getAllPosts() {
    return await this.postRepository.find({
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
  }

  async createPost(content: string, user: User) {
    const post = this.postRepository.create({
      content,
      author: user,
    });

    await this.postRepository.save(post);

    return this.getAllPosts();
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
    return this.getAllPosts();
  }
}
