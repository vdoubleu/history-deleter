
// gets the base of a url
// given a url like http://localhost:3000/users/test
// returns http://localhost:3000
export function getUrlBase(url) {
  const urlParts = url.split('/');

  return `${urlParts[0]}//${urlParts[2]}`;
}


export function getImageFromSite(site) {
  return `/images/${site}-logo.png`;
}

export function getImageFromSiteToggleOff(site) {
  return `/images/${site}-black-and-white.png`;
}

export function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
