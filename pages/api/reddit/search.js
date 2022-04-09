export default async function (req, res) {
  const query = req.query.q;
  const token = req.query.token;
  const page = req.query.page || 1;

  console.log(query, token);

  // TODO: search through reddit for posts matching query
  const searchRes = await fetch(`${process.env.REDDIT_URI}/r/all/search.json?q=${query}&sort=relevance&t=all&limit=100&page=${page}`, {
    // headers: {
    //   Authorization: `bearer ${token}`,
    // },
  });
  const searchResJson = await searchRes.json();

  res.json(searchResJson.data.children);
}
