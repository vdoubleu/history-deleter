/**
 * gets google search results
 * @param {string} query - search query
 * @param {number} page - page number, starts at 0
 * @returns {object} - object of search results
 */
export async function GetGoogleResults(query, page, searchtype) {
  const searchTypeParam = searchtype ? `searchType=${searchtype}` : '';

  const res = await fetch(`/api/google/search?q=${query}&pageindex=${page}&${searchTypeParam}`);

  const data = await res.text();
  console.log(data);

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
