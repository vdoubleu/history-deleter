import { Typography, Container } from "@mui/material";
import Link from '@mui/material/Link';

import NavBar from '../components/NavBar';

export default function InternetArchive() {
  return (
    <div>
      <NavBar />

      <Container>
      <Typography sx={{m: 5}} align={"center"} variant={"h4"}> Resources </Typography>

      <Typography sx={{m: 2}} align={"left"} variant={"body1"}>
        The following is a combined list of links to resources for you to reference. These cover how to takedown undesirable posts, search results, images, and information related to yourself from the internet. Do note, these are resources to get you started and for more complex issues, please consult a lawyer.
        <br />

        <Typography sx={{mt: 5}} align={"left"} variant={"h5"}> Google </Typography>
        <Typography sx={{m: 0}} align={"left"} variant={"body1"}>
          To remove data from google products, there are several options depending on the situation. Please see this page for more details.
          <br />
          <Link href="/google" target="_blank"> Google Product Data Removal </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"left"} variant={"h5"}> Reddit </Typography>
        <Typography sx={{m: 0}} align={"left"} variant={"body1"}>
          If you are the owner of the content, you can simply login and delete it. If it belongs to someone else, you can report it by going to the following link. <br />
          <Link href="https://www.reddit.com/report" target="_blank"> Reddit Report Content </Link>
          <br />

          Additionally, you can submit a DMCA takedown request depending on the content by going to the following link. <br />
          <Link href="https://reddit.zendesk.com/hc/en-us/articles/360043515291-What-is-the-DMCA-" target="_blank"> Reddit DMCA Takedown Request </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"left"} variant={"h5"}> Internet Archive </Typography>
        <Typography sx={{m: 0}} align={"left"} variant={"body1"}>
          To takedown content from the internet archive, you must file an appropriete DMCA takedown request. We guide you through how to do below. <br/>
          <Link href="/dmca" target="_blank"> Internet Archive DMCA Template </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"left"} variant={"h5"}> Pornhub </Typography>
        <Typography sx={{m: 0}} align={"left"} variant={"body1"}>
          To remove content from pornhub, you can report the content by going to the following link. <br />
          <Link href="https://www.pornhub.com/content-removal" target="_blank"> Pornhub Report Content </Link>
          <br />  
          You can also submit content to MediaWise's database to be digitally fingerprinted through their email below. Any content past, present or future on Pornhub that matches this digital fingerprint will be removed. <br/>
          <Link href="mailto:support@vobileinc.com" target="_blank"> support@vobileinc </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"left"} variant={"h5"}> Twitter </Typography>
        <Typography sx={{m: 0}} align={"left"} variant={"body1"}>
          To remove content from twitter, you can report the content by going to the following link. <br />
          <Link href="https://help.twitter.com/en/forms/safety-and-sensitive-content" target="_blank"> Twitter Report Content </Link>
        </Typography>
      </Typography>
      </Container>
    </div>
  );
}
