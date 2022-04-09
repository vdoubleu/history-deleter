import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GetTwitterResults } from "../../../utils/routes";

import NavBar from '../../../components/NavBar';
import SearchResultCard from '../../../components/SearchResultCard';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search() {
  const router = useRouter();
  const searchTarget = router.query.q
  const [searchResults, setSearchResults] = useState(null);

  useEffect(async () => {
    if (!searchTarget) return;

    const res = await GetTwitterResults(searchTarget);
    setSearchResults(res);
    console.log(res);
  }, [searchTarget]);

  function getTweetUrl(id) {
    return `https://twitter.com/twitter/status/${id}`
  }

  function takedownTwitter(data) {
    router.push({
      pathname: '/search/twitter/takedown',
      query: {
        id: data.id,
        text: data.text,
        author: data.author_id,
        url: getTweetUrl(data.id),
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
              URL={getTweetUrl(result.id)}
              title={""}
              snippet={result.text}
              type={"Twitter Search Result"}
              onRemove={takedownTwitter}
              redirect={null}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}
