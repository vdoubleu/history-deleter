import { Typography, Container } from "@mui/material";
import Link from '@mui/material/Link';

import NavBar from '../../components/NavBar';

export default function InternetArchive() {
  return (
    <div>
      <NavBar />

      <Container>
      <Typography sx={{m: 5}} align={"center"} variant={"h4"}> Internet Archive Takedown Process </Typography>

      <Typography sx={{m: 2, fontWeight: 600 }} align={"left"} variant={"body1"}>
        Note: The contents of this website is not intended to constitute legal advice!
        Consult a lawyer for any serious legal problems. <br></br>
      </Typography>

        <Typography sx={{m: 2}} align={"left"} variant={"body1"}>
        If you wish to delete the links to your website or domain that has been archived by the Internet Archive, you need to
        send an email to
        <Link href="info@archive.org" underline="none">
          {' info@archive.org '}
        </Link>
        to request a takedown. <br></br><br></br>

        Here is an email template you can use for reference. Replace the dummy words in <b>&lt; </b>&gt; with 
        your information. <br></br>
        <hr></hr><br></br>

        Hello,<br></br><br></br>

        I am <b>&lt;your name</b>&gt;, the owner of domain name and website <b>&lt;your domain</b>&gt;.<br></br><br></br>

        I request you to remove the following links from your website:<br></br><br></br>
        
        <b>&lt;the internet archive links of your website</b>&gt;<br></br><br></br>

        My Address:<br></br><br></br>
        <b>&lt;your mailing address</b>&gt;<br></br><br></br>

        Phone No:<br></br><br></br>
        <b>&lt;your phone number</b>&gt;<br></br><br></br>

        Email Address :<br></br><br></br>
        <b>&lt;your email address, ideally from the same domain</b>&gt;<br></br><br></br>

        I have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.<br></br><br></br>

        The above information in this notice is accurate, and under penalty of perjury, I am the owner of the copyright interest involved. 
        Attached is formal DMCA notice as well as evidence that I am the owner of <b>&lt;your domain</b>&gt;.
        <br></br><br></br>
        Kind regards,
        <br></br><br></br>
        <b>&lt;your name</b>&gt;
        <br></br>
        <hr></hr><br></br>

        To prove domain ownership, you will need to find an old invoice / receipt 
        from your domain host proving ownership. Here are two sites that provide DMCA notice generators:<br></br><br></br>

        <Typography sx={{}} align={"left"} variant={"body1"}>
        <Link href="https://www.shift4shop.com/business-tools/dmca-generator.html" underline="none">
          {'DMCA Notice Generator'}
        </Link>
        </Typography>

        <Typography sx={{}} align={"left"} variant={"body1"}>
        <Link href="https://iphqs.com/dmca-takedown-notice-generator" underline="none">
          {'DMCA Takedown Notice Generator'}
        </Link>
        <br></br>
        <br></br>
        </Typography>
      </Typography>
      </Container>
    </div>
  );
}
