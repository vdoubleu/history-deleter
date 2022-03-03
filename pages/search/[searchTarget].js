import { useEffect, useState } from 'react';
import { GetGoogleResults } from "../../utils/routes";

import NavBar from '../../components/NavBar';
import SearchResultCard from '../../components/SearchResultCard';

import { CircularProgress, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

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
        <CircularProgress />
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div>
        <NavBar />
        <Box p={2}>
          No results found.
        </Box>
      </div>
    );
  }
  return (
    <div> 
      <NavBar />

      <Container>
        {searchResults.map((result, index) => (
          <SearchResultCard 
            key={index} 
            result={result} 
            URL={result.link}
            title={result.title}
            snippet={result.snippet}
            />
        ))}
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
