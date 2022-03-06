function getUrlBase(url) {
  console.log(url);
  const urlParts = url.split('/');

  return `${urlParts[0]}//${urlParts[2]}`;
}

export default async function (req, res) {
  const urlBase = getUrlBase(req.headers.referer);
  const redirectURI = `${urlBase}/auth/facebook/callback`;

  const oauth2URI = `${process.env.FB_URI}/dialog/oauth?client_id=${process.env.FB_APP_ID}&redirect_uri=${redirectURI}`;

  res.redirect(oauth2URI);
}
