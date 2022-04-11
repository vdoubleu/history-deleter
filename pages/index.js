import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SiteSelectModal from '../components/SiteSelectModal';
import FileUpload from '../components/FileUpload';

import { getImageFromSite, getImageFromSiteToggleOff } from "../utils/utilFunc";

import { Container, Box, Typography, Button } from "@mui/material";

import { useState } from 'react';

const sites = ["google", "image", "archive", "twitter", "reddit", "pornhub"];
// const requireOauth = new Set(["reddit"]);

export default function Home() {
  // const [openSiteSelectModal, setOpenSiteSelectModal] = useState(false);
  // const [currSite, setCurrSite] = useState("google");
  const router = useRouter();
  const [googleOn, setGoogleOn] = useState("on");
  const [archiveOn, setArchiveOn] = useState("on");
  const [redditOn, setRedditOn] = useState("on");
  const [twitterOn, setTwitterOn] = useState("on");
  const [pornHubOn, setPornHubOn] = useState("on");

  function handleSubmit(searchTarget) {
    console.log(searchTarget);

    // if (requireOauth.has(currSite)) {
    //   router.push({
    //     pathname: `/api/${currSite}/auth`,
    //     query: {
    //       q: searchTarget
    //     }
    //   });
    // } else {
    const onEngines = [
      googleOn === "on" ? "google" : null,
      archiveOn === "on" ? "archive" : null,
      redditOn === "on" ? "reddit" : null,
      twitterOn === "on" ? "twitter" : null,
      pornHubOn === "on" ? "pornhub" : null
    ];
    const onEnginesStr = onEngines.filter(e => e !== null).join(",");

    router.push({
      // pathname: `/search/${currSite}/result`,
      pathname: `search/result`,
      query: {
        q: searchTarget,
        engines: onEnginesStr
      }
    });
    // }
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
        // pathname: `/search/${currSite}/result`,
        pathname: `/search/image/result`,
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
            <Typography varient="h4" sx={{ m: 1 }}>
              Click to select the sites you want to search (All sites are selected by default)
            </Typography>
            <Box
                component="span"
                m={1} //margin
                alignItems="center"
            >
            { googleOn === "on" ?
                <>
                  <Button onClick={() => setGoogleOn("off")} >
                    <Image src={getImageFromSite("google")} alt="logo" width={150} height={150} />
                  </Button>
                </>:
                <>
                  <Button onClick={() => setGoogleOn("on")}>
                    <Image src={getImageFromSiteToggleOff("google")} alt="logo" width={150} height={150} />
                  </Button>
                </>}
            { archiveOn === "on" ?
                <>
                  <Button onClick={() => setArchiveOn("off")}>
                    <Image src={getImageFromSite("archive")} alt="logo" width={150} height={150} />
                  </Button>
                </>:
                <>
                  <Button onClick={() => setArchiveOn("on")}>
                    <Image src={getImageFromSiteToggleOff("archive")} alt="logo" width={150} height={150} />
                  </Button>
                </>}
            { redditOn === "on" ?
                <>
                  <Button onClick={() => setRedditOn("off")}>
                    <Image src={getImageFromSite("reddit")} alt="logo" width={150} height={150} />
                  </Button>
                </>:
                <>
                  <Button onClick={() => setRedditOn("on")}>
                    <Image src={getImageFromSiteToggleOff("reddit")} alt="logo" width={150} height={150} />
                  </Button>
                </>}
            { twitterOn === "on" ?
                <>
                  <Button onClick={() => setTwitterOn("off")}>
                    <Image src={getImageFromSite("twitter")} alt="logo" width={150} height={150} />
                  </Button>
                </>:
                <>
                  <Button onClick={() => setTwitterOn("on")}>
                    <Image src={getImageFromSiteToggleOff("twitter")} alt="logo" width={150} height={150} />
                  </Button>
                </>}
            { pornHubOn === "on" ?
                <>
                  <Button onClick={() => setPornHubOn("off")}>
                    <Image src={getImageFromSite("pornhub")} alt="logo" width={150} height={150} />
                  </Button>
                </>:
                <>
                  <Button onClick={() => setPornHubOn("on")}>
                    <Image src={getImageFromSiteToggleOff("pornhub")} alt="logo" width={150} height={150} />
                  </Button>
                </>}
            </Box>

            <Typography varient="h3" sx={{ m: 1 }}>
              {'Enter Keywords/Usernames that you have previously used' }
            </Typography>

            <SearchBar OnSubmit={handleSubmit} />

            <Typography varient="h3" sx={{ m: 3, fontWeight: 800 }}>
              {'OR' }
            </Typography>
            <Button>
              <Image src={getImageFromSite("image")} alt="logo" width={200} height={200} />
            </Button>
            <FileUpload onUpload={onFileUpload} text={'Upload Image'} />
            <Typography varient="h3" sx={{ m: 1 }}>
              {'Enter images that you would like to search for'}
            </Typography>
          </Box>

        </Container>

    {/*<SiteSelectModal open={openSiteSelectModal} handleClose={() => setOpenSiteSelectModal(false)} setSite={setCurrSite} sites={sites} />*/}

      </main>
    </div>
  )
}
