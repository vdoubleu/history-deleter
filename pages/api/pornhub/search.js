import pornhub from '@justalk/pornhub-api';

export default async function (req, res) {
  const videoSearchRes = await pornhub.search(req.query.q, "", {
    page: (parseInt(req.query.pageindex) + 1) || 1,
    search: "video"
  });

  const cleanedResVideo = videoSearchRes.results ?
    videoSearchRes.results.map(item => {
      return {
        title: item.title,
        author: item.author,
        link: item.link,
        type: "video",
      };
    }) : [];

  const actorSearchRes = await pornhub.search(req.query.q, "", {
    page: (parseInt(req.query.pageindex) + 1) || 1,
    search: "pornstars"
  });

  const cleanedResActor = actorSearchRes.results ? 
    actorSearchRes.results.map(item => {
      return {
        actor: item.actor,
        videoNumber: item.video_number,
        views: item.view_number
      }
    }) : [];


  res.json({video: cleanedResVideo, actor: cleanedResActor});
}
