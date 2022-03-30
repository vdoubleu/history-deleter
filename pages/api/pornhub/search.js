import pornhub from '@justalk/pornhub-api';

export default async function (req, res) {
  const videoSearchRes = await pornhub.search(req.query.q);

  const cleanedRes = videoSearchRes.results.map(item => {
    return {
      title: item.title,
      author: item.author,
      link: item.link,
      type: "video",
    };
  });

  res.json(cleanedRes);
}
