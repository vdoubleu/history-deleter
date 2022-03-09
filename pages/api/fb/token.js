
export default async function (req, res) {
  const tokenURI = `${process.env.FB_GRAPH_URI}/oauth/access_token?` +
    `client_id=${process.env.FB_APP_ID}&` +
    `redirect_uri=http://localhost:3000/callback/facebook&` +
    `client_secret=${process.env.FB_APP_SECRET}&` +
    `code=${req.query.code}`;

  const response = await fetch(tokenURI);
  const json = await response.json();
  res.send(json);
}
