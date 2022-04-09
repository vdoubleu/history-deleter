import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GetRedditResults, GetRedditToken } from "../../../utils/routes";

import NavBar from '../../../components/NavBar';
import SearchResultCard from '../../../components/SearchResultCard';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search() {
  const router = useRouter();
  const searchTarget = router.query.state;
  const accessCode = router.query.code;
  const [searchResults, setSearchResults] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(async () => {
    if (!searchTarget) return;

    const tokenRes = await GetRedditToken(accessCode);
    console.log(tokenRes);

    const res = await GetRedditResults(searchTarget, 0, tokenRes.access_token);
    setSearchResults(res);
    setToken(tokenRes.access_token);
    console.log(res);
  }, [searchTarget]);

  function takedownReddit(item) {
    const data = item.data;
    router.push({
      pathname: '/search/reddit/takedown',
      query: {
        id: data.name,
        title: data.title,
        author: data.author,
        url: data.url,
      }
    });
  }

  if (!searchResults) {
    return (
      <div>
        <NavBar />
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="center" alignItems="center" sx={{mt: 5}}>
            <CircularProgress />
          </Box>
        </Container>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div>
        <NavBar />
        <Box sx={{mt: 5}}>
          No results found.
        </Box>
      </div>
    );
  }
  return (
    <div> 
      <NavBar />

      <Container>
        <Box sx={{mt: 5}}>
          {searchResults.map((result, index) => (
            <SearchResultCard 
              key={index} 
              data={result} 
              URL={result.link}
              title={result.title}
              snippet={result.snippet}
              type={"Reddit Search Result"}
              onRemove={takedownReddit}
              redirect={null}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}
