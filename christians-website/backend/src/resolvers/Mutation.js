const mutations = {

  async createPost(parent, args, ctx, info) {
    const post = await ctx.db.mutation.createPost({
      data: {
        ...args
      }
    }, info)
    return post;
  }
};

module.exports = mutations;
