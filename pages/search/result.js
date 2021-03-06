import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { 
  GetGoogleResults, 
  GetPornHubResults,
  GetArchiveResults, 
  GetRedditResults, 
  GetTwitterResults, 
} from "../../utils/routes";

import NavBar from '../../components/NavBar';
import SearchResultCard from '../../components/SearchResultCard';

import { shuffleArray } from '../../utils/utilFunc';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search() {
  const router = useRouter();
  const searchTarget = router.query.q;
  const searchType = router.query.searchType;
  const engines = router.query.engines;
  const [searchResults, setSearchResults] = useState(null);

  useEffect(async () => {
    if (!searchTarget) {
      console.log("No search target");
      return;
    }
    console.log(searchTarget, searchType);

    let allResults = [];
    if (engines.includes("google")) {
      allResults.push(GetGoogleResults(searchTarget, 0, searchType));
    }
    if (engines.includes("pornhub")) {
      allResults.push(GetPornHubResults(searchTarget, 0));
    }
    if (engines.includes("archive")) {
      allResults.push(GetArchiveResults(searchTarget, 0, takedownArchive));
    }
    if (engines.includes("reddit")) {
      allResults.push(GetRedditResults(searchTarget, 0, "", 0));
    }
    if (engines.includes("twitter")) {
      allResults.push(GetTwitterResults(searchTarget, 0));
    }

    const results = await Promise.all(allResults);

    const merged = shuffleArray(results.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []));

    console.log(merged);
    setSearchResults(merged);
  }, [searchTarget]);

  async function takedownArchive() {
    router.push({
      pathname: '/dmca',
      query: {
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
              URL={result.url}
              title={result.title}
              snippet={result.snippet}
              type={result.type}
              redirect={result.redirect}
              onRemove={result.onRemove}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}
