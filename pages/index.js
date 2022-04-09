import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SiteSelectModal from '../components/SiteSelectModal';
import FileUpload from '../components/FileUpload';

import { getImageFromSite } from "../utils/utilFunc";

import { Container, Box, Typography, Button } from "@mui/material";

import { useState } from 'react';

const sites = ["google", "image", "archive", "twitter", "reddit", "pornhub"];
const requireOauth = new Set(["reddit", "twitter"]);

export default function Home() {
  const [openSiteSelectModal, setOpenSiteSelectModal] = useState(false);
  const [currSite, setCurrSite] = useState("google");
  const router = useRouter();

  function handleSubmit(searchTarget) {
    console.log(searchTarget);

    if (requireOauth.has(currSite)) {
      router.push({
        pathname: `/api/${currSite}/auth`,
        query: {
          q: searchTarget
        }
      });
    } else {
      router.push({
        pathname: `/search/${currSite}/result`,
        query: {
          q: searchTarget
        }
      });
    }
  }

  function onFileUpload({target}) {
    console.log(target.files[0])
    // upload file to anonfile and get the url
    let formData = new FormData();
    formData.append('file', target.files[0]);
    fetch("/api/image/upload", {
      method: "POST",
      body: formData
    }).then(res => res.json())
    .then(res => {
      console.log(res.fileurl);
      router.push({
        pathname: `/search/${currSite}/result`,
        query: {
          q: res.fileurl,
          searchtype: 'image'
        }
      });
    })
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
            <Typography varient="h3" sx={{ m: 1 }}> 
            { currSite === 'image' ?  
              'Enter images that you would like to search for' : 
              'Enter Keywords/Usernames that you have previously used' }
            </Typography>
          { 
            currSite === 'image' ? 
            (<FileUpload onUpload={onFileUpload} text={'Upload Image'} />) : 
            (<SearchBar OnSubmit={handleSubmit} />) 
          }
          </Box>
      
        </Container>

        <SiteSelectModal open={openSiteSelectModal} handleClose={() => setOpenSiteSelectModal(false)} setSite={setCurrSite} sites={sites} />


      </main>
    </div>
  )
}
