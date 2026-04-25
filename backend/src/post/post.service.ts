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

  async createPost(content: string, user: User) {
    const post = this.postRepository.create({
      content,
      author: user,
    });

    return this.postRepository.save(post);
  }

  async getPosts(id: number) {
    return this.postRepository.find({
      where: {
        author: { id },
      },
    });
  }

  async removePost(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new Error('post not found');
    }
    await this.postRepository.remove(post);
    return { message: 'post deleted' };
  }
}
