export default async function (req, res) {
  const query = req.query.q;
  const searchRes = await fetch(`${process.env.TWITTER_URI}/2/tweets/search/recent?query=${query}&max_results=50&tweet.fields=text,created_at,public_metrics,author_id`, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  });

  const json = await searchRes.json();
  res.json(json.data);
}
