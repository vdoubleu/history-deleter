import SerpApi from 'google-search-results-nodejs';

export default async function handler(req, res) {
  const search = new SerpApi.GoogleSearch(process.env.SERP_API_KEY);
  const query = req.query.q;
  const page = req.query.page || "0";

  const params = {
    engine: "google_reverse_image",
    google_domain: "google.com",
    q: query,
    image_url: query,
    start: page
  };

  const searchRes = await new Promise((resolve, reject) => {
    search.json(params, function(response) {
      resolve(response);
    });
  });

  res.json(searchRes.image_results);
}
