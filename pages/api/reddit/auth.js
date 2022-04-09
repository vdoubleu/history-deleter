import { getUrlBase } from '../../../utils/utilFunc';

const requiredScopes = ['edit', 'read', 'identity'];

export default async function (req, res) {
  const urlBase = getUrlBase("http://" + req.headers.host);
  console.log(urlBase);
  const redirectURI = `${urlBase}/search/reddit/result`;
  const scopes = requiredScopes.join(' ');

  const oauth2URI = `${process.env.REDDIT_URI}/api/v1/authorize?client_id=${process.env.REDDIT_CLIENT_ID}&redirect_uri=${redirectURI}&scope=${scopes}&state=${req.query.q}&response_type=code`;
  res.redirect(oauth2URI);
}
