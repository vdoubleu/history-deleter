import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GetImageResults } from "../../../utils/routes";

import NavBar from '../../../components/NavBar';
import SearchResultCard from '../../../components/SearchResultCard';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search() {
  const router = useRouter();
  const searchTarget = router.query.q;
  const searchType = router.query.searchtype;
  const removeGoogleResultLink = "https://www.google.com/webmasters/tools/legal-removal-request?complaint_type=rtbf&visit_id=0-636496126362623931-44683020&rd=1&pli=1";
  const [searchResults, setSearchResults] = useState(null);

  useEffect(async () => {
    if (!searchTarget) return;
    console.log(searchTarget, searchType);
    const res = await GetImageResults(searchTarget, 0, searchType);
    setSearchResults(res);
    console.log(res);
  }, [searchTarget, searchType]);

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
              result={result} 
              URL={result.thumbnail}
              title={result.title}
              snippet={result.snippet}
              type={"Google Image Search Result"}
              redirect={removeGoogleResultLink}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}