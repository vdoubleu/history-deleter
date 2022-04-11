import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GetArchiveResults } from "../../../utils/routes";

import NavBar from '../../../components/NavBar';
import SearchResultCard from '../../../components/SearchResultCard';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Search() {
  const router = useRouter();
  const searchTarget = router.query.q;
  const [searchResults, setSearchResults] = useState(null);

  useEffect(async () => {
    const res = await GetArchiveResults(searchTarget, 0);
    setSearchResults(res);
    console.log(res);
  }, [searchTarget]);

  async function takedownArchive(data) {
    const id = data.identifier;
    const res = await fetch(`/api/archive/metadata?id=${id}`);
    const json = await res.json();

    console.log(json);
    const url = "https://" + json.d1 + json.dir;

    console.log(url);

    router.push({
      pathname: '/search/archive/takedown',
      query: {
        url: url,
        title: json.metadata.title
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
              title={result.title}
              snippet={result.description}
              type={"Internet Archive Search Result"}
              redirect={null}
              onRemove={takedownArchive}
              data={result}
              />
          ))}
        </Box>
      </Container>
    </div>
  );
}
