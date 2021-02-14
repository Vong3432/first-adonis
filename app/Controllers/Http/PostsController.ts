// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post";

export default class PostsController {
  public async index({ view }) {
    const posts = await Post.all();
    return view.render('posts.index', { posts })
  }

  public async new() {
    console.log('Create')    
  }
}
