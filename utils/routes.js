const MAXLENGTH = 200;

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
    const removeGoogleResultLink = "https://support.google.com/websearch/troubleshooter/9685456";
    const cleanedData = data.map(item => {
      return {
        url: item.link,
        title: item.title,
        snippet: item.snippet,
        type: "Google Search Result",
        redirect: removeGoogleResultLink,
        onRemove: null
      }
    });
    return cleanedData;
  } catch(error) {
    console.log('error', error);
    return [];
  }
}

export async function GetPornHubResults(query, page) {
  const res = await fetch(`/api/pornhub/search?q=${query}&pageindex=${page}`);

  try {
    const data = await res.json();
    const removePornhubLink = "https://www.pornhub.com/content-removal";
    const cleanedActorData = data.actor.map(item => {
      return {
        url: null,
        title: item.actor,
        snippet: `Video Count: ${item.videoNumber}\n${item.views}`,
        type: "PornHub Actor",
        redirect: removePornhubLink,
        onRemove: null
      }
    });
    const cleanedVideoData = data.video.map(item => {
      return {
        url: item.link,
        title: item.title,
        snippet: `By: ${item.author}`,
        type: "PornHub Video",
        redirect: removePornhubLink,
        onRemove: null
      }
    });

    const combinedData = cleanedActorData
      .concat(cleanedVideoData)

    return combinedData;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export async function GetArchiveResults(query, page, archiveRemove) {
  const res = await fetch(`/api/archive/search?q=${query}&pageindex=${page}`);

  try {
    const data = await res.json();

    const cleanedData = data.map(item => {
      return {
        url: null,
        title: item.title,
        snippet: (item.description && item.description.length > MAXLENGTH) ? item.description.slice(0,MAXLENGTH)+"...": item.description,
        type: "Internet Archive Search Result",
        redirect: null,
        onRemove: archiveRemove
      }
    });

    return cleanedData;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export async function GetImageResults(query, page) {
  const res = await fetch(`/api/image/search?q=${query}&pageindex=${page}`);

  try {
    const data = await res.json();

    return data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export async function GetRedditResults(query, page, token, redditOnRemove) {
  const res = await fetch(`/api/reddit/search?q=${query}&pageindex=${page}&token=${token}`);
  const removeRedditLink = "https://www.reddit.com/report";
  try {
    const data = await res.json();

    const cleanedData = data.map(item => {
      const text = item.data.selftext ? ` - ${item.data.selftext}`.slice(0, MAXLENGTH) : `- ${item.data.url}`;
      return {
        url: "https://www.reddit.com" + item.data.permalink,
        title: item.data.title,
        snippet: `${item.data.author}` + text,
        type: "Reddit Search Result",
        redirect: removeRedditLink,
        onRemove: null
      }
    });

    return cleanedData;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export async function GetRedditToken(code) {
  const res = await fetch(`/api/reddit/token?code=${code}`);

  const data = await res.json();
  return data;
}

export async function GetTwitterResults(query, tweetOnRemove) {
  const res = await fetch(`/api/twitter/search?q=${query}`);
  const removeTwitterLink = "https://help.twitter.com/en/forms/safety-and-sensitive-content";
  try {
    const data = await res.json();
    const cleanedData = data.map(item => {
      return {
        url: `https://twitter.com/twitter/status/${item.id}`,
        title: null,
        snippet: item.text,
        type: "Twitter Search Result",
        redirect: removeTwitterLink,
        onRemove: null
      }
    });

    return cleanedData;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}
