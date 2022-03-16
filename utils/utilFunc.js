
// gets the base of a url
// given a url like http://localhost:3000/users/test
// returns http://localhost:3000
export function getUrlBase(url) {
  const urlParts = url.split('/');

  return `${urlParts[0]}//${urlParts[2]}`;
}
