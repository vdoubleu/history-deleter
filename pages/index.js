import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SiteSelectModal from '../components/SiteSelectModal';

import { Container, Box, Typography, Button } from "@mui/material";

import { useState } from 'react';

const sites = ["google", "bing", "archive", "twitter", "reddit", "pornhub"];

export default function Home() {
  const [openSiteSelectModal, setOpenSiteSelectModal] = useState(false);
  const [currSite, setCurrSite] = useState("google");
  const router = useRouter();

  function handleSubmit(searchTarget) {
    console.log(searchTarget);
    router.push(`/search/${searchTarget}`);
  }

  function getImageFromSite(site) {
    return `/images/${site}-logo.png`;
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
          <Button onClick={() => setOpenSiteSelectModal(true)}> 
            <Image src={getImageFromSite(currSite)} alt="logo" width={200} height={200} /> 
          </Button>
            <Typography varient="h3" sx={{ m: 1 }}> Enter Keywords/Usernames that you have previously used </Typography>
            <SearchBar OnSubmit={handleSubmit} />
          </Box>
        </Container>

        <SiteSelectModal open={openSiteSelectModal} handleClose={() => setOpenSiteSelectModal(false)} setSite={setCurrSite} sites={sites} />


      </main>
    </div>
  )
}
