import { getUrlBase } from '../../../utils/utilFunc';

const requiredScopes = ['edit', 'read'];

export default async function (req, res) {
  const urlBase = getUrlBase(req.headers.referer);
  console.log(urlBase);
  const redirectURI = `${urlBase}/callback/reddit`;
  const scopes = requiredScopes.join(',');

  const oauth2URI = `${process.env.REDDIT_URI}/authorize?client_id=${process.env.REDDIT_CLIENT_ID}&redirect_uri=${redirectURI}&scope=${scopes}&state=hello&response_type=code`;
  res.redirect(oauth2URI);
}
