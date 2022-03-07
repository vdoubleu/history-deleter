import Head from 'next/head';
import { useRouter } from 'next/router';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

import { Container, Box, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();

  function handleSubmit(searchTarget) {
    console.log(searchTarget);
    router.push(`/search/${searchTarget}`);
  }

  return (
    <div>
      <Head>
        <title>History Deleter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />

        <Container maxWidth="md">
          <Box my={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h2"> Deleter </Typography>
            <Typography varient="h3" sx={{ m: 1 }}> Enter Keywords/Usernames that you have previously used </Typography>
            <SearchBar OnSubmit={handleSubmit} />
          </Box>
        </Container>


      </main>
    </div>
  )
}
