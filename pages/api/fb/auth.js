function getUrlBase(url) {
  console.log(url);
  const urlParts = url.split('/');

  return `${urlParts[0]}//${urlParts[2]}`;
}

const requiredScopes = ['user_posts'];

export default async function (req, res) {
  const urlBase = getUrlBase(req.headers.referer);
  const redirectURI = `${urlBase}/callback/facebook`;
  const scopes = requiredScopes.join(',');

  const oauth2URI = `${process.env.FB_URI}/dialog/oauth?client_id=${process.env.FB_APP_ID}&redirect_uri=${redirectURI}&scope=${scopes}`;

  res.redirect(oauth2URI);
}
