import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { PostRepository } from '../repositories/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  getAllPosts() {
    return this.postRepository.findAll();
  }

  getPostById(id: string) {
    return this.postRepository.findByCondition(id);
  }
  createPost(post: CreatePostDto) {
    return this.postRepository.create(post);
  }
  replacePost(id: string, post: UpdatePostDto) {
    return this.postRepository.findByIdAndUpdate(id, post);
  }
  deletePost(id: string) {
    return this.postRepository.deleteOne(id);
  }
}
