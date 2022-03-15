
export default async function (req, res) {
  const tokenURI = `${process.env.REDDIT_URI}/access_token`;

  const tok = process.env.REDDIT_CLIENT_ID + ':' + process.env.REDDIT_CLIENT_SECRET;
  const auth = 'Basic ' + Buffer.from(tok).toString('base64');
  const response = await fetch(tokenURI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    },
    body: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/callback/reddit`
  });

  const json = await response.json();
  res.send(json);
}
