import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GetPornHubResults } from "../../../utils/routes";

import NavBar from '../../../components/NavBar';
import SearchResultCard from '../../../components/SearchResultCard';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search() {
  const router = useRouter();
  const searchTarget = router.query.q;
  const redirectLink = "https://www.pornhub.com/content-removal";
  const [searchResults, setSearchResults] = useState(null);

  useEffect(async () => {
    const res = await GetPornHubResults(searchTarget, 0);
    setSearchResults(res.video);
    console.log(res);
  }, [searchTarget]);

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
              result={null} 
              URL={result.link}
              title={result.title}
              snippet={""}
              type={"Pornhub Search Result"}
              redirect={redirectLink}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}
