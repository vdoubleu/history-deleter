export default async function (req, res) {
  const query = req.query.q;
  const token = req.query.token;
  const page = req.query.page || 1;

  console.log(query, token);

  // TODO: search through reddit for posts matching query
  const searchRes = await fetch(`${process.env.REDDIT_URI}/r/all/search.json?q=${query}&sort=relevance&t=all&limit=100&page=${page}`);
  const searchResComment = await fetch(`${process.env.REDDIT_NEW_URI}/reddit/search/comment/?q=${query}`);
  const searchAuthorComment = await fetch(`${process.env.REDDIT_NEW_URI}/reddit/search/comment/?author=${query}&sort=asc&size=100`);
  const searchResJson = await searchRes.json();
  const searchCommentResJson = await searchResComment.json();
  const searchAuthorCommentJSON = await searchAuthorComment.json();

  searchCommentResJson.data = searchAuthorCommentJSON.data.map(item => {
    return  {
      data: {
        selftext: item.body,
        title: "",
        author: item.author,
        permalink: ""
      }
    }
  });

  searchAuthorCommentJSON.data = searchAuthorCommentJSON.data.map(item => {
    return {
      data: {
        selftext: item.body,
        title: "",
        author: item.author,
        permalink: ""
      }
    }
  });

  const addedList = searchCommentResJson.data.concat(searchAuthorCommentJSON.data);
  res.json(searchResJson.data.children.concat(addedList));
}
