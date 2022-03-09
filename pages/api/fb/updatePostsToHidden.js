// posts from facebook
async function getPosts(userId) {
  const getPostsUri = `${process.env.FB_GRAPH_URI}/${userId}/posts`;
  const posts = await fetch(getPostsUri);
  const postsJson = await posts.json();

  return postsJson.data;
}


export default async function (req, res) {
  const { userId } = req.query.userid;
  const getFbPosts = await getPosts(userId);

  for (let i = 0; i < getFbPosts.length; i += 1) {
    const postId = getFbPosts[i].id;
    // TODO: update post to hidden
  }
}
