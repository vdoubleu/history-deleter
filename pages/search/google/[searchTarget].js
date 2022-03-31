import { useEffect, useState } from 'react';
import { GetGoogleResults } from "../../../utils/routes";

import NavBar from '../../../components/NavBar';
import SearchResultCard from '../../../components/SearchResultCard';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search(props) {
  const searchTarget = props.searchTarget;
  const [searchResults, setSearchResults] = useState(null);

  useEffect(async () => {
    const res = await GetGoogleResults(searchTarget, 0);
    setSearchResults(res);
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
              result={result} 
              URL={result.link}
              title={result.title}
              snippet={result.snippet}
              type={"Google Search Result"}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  // these are the list of paths to pre-render
  // in our case, we aren't pre-rendering anything
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  return { props: { searchTarget: params.searchTarget } }
}
