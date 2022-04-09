/**
 * gets google search results
 * @param {string} query - search query
 * @param {number} page - page number, starts at 0
 * @returns {object} - object of search results
 */
export async function GetGoogleResults(query, page, searchtype) {
  const searchTypeParam = searchtype ? `searchType=${searchtype}` : '';

  const res = await fetch(`/api/google/search?q=${query}&pageindex=${page}&${searchTypeParam}`);

  try{
    const data = await res.json();
    return data;
  } catch(error) {
    console.log('error', error);
    return [];
  }
}

export async function GetPornHubResults(query, page) {
  const res = await fetch(`/api/pornhub/search?q=${query}&pageindex=${page}`);

  const data = await res.json();
  return data;
}

export async function GetArchiveResults(query, page) {
  const res = await fetch(`/api/archive/search?q=${query}&pageindex=${page}`);

  const data = await res.json();
  return data;
}

export async function GetImageResults(query, page) {
  const res = await fetch(`/api/image/search?q=${query}&pageindex=${page}`);

  const data = await res.json();
  return data;
}

export async function GetRedditResults(query, page, token) {
  const res = await fetch(`/api/reddit/search?q=${query}&pageindex=${page}&token=${token}`);

  const data = await res.json();
  return data;
}

export async function GetRedditToken(code) {
  const res = await fetch(`/api/reddit/token?code=${code}`);

  const data = await res.json();
  return data;
}

export async function GetTwitterResults(query) {
  const res = await fetch(`/api/twitter/search?q=${query}`);

  const data = await res.json();
  return data;
}
