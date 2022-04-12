import { Typography, Container } from "@mui/material";
import Link from '@mui/material/Link';

import NavBar from '../../components/NavBar';

export default function Google() {
  return (
    <div>
      <NavBar />

      <Container>
        <Typography sx={{m: 5}} align={"center"} variant={"h4"}> Taking down content from Google products  </Typography>

        <Typography sx={{mt: 5}} align={"center"} variant={"h5"}> Google Search </Typography>
          <Typography sx={{m: 0}} align={"center"} variant={"body1"}>
          <Link href="https://support.google.com/websearch/troubleshooter/9685456" underline="none">
            {' https://support.google.com/legal/troubleshooter/1114905?hl=en '}
          </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"center"} variant={"h5"}> Images </Typography>
          <Typography sx={{m: 0}} align={"center"} variant={"body1"}>
          <Link href="https://developers.google.com/search/docs/advanced/crawling/prevent-images-on-your-page" underline="none">
            {' https://developers.google.com/search/docs/advanced/crawling/prevent-images-on-your-page '}
          </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"center"} variant={"h5"}> Removing Outdated Content </Typography>
          <Typography sx={{m: 0}} align={"center"} variant={"body1"}>
          <Link href="https://search.google.com/search-console/remove-outdated-content?utm_source=wmx&utm_medium=deprecation-pane&utm_content=removals" underline="none">
            {' https://search.google.com/search-console/remove-outdated-content?utm_source=wmx&utm_medium=deprecation-pane&utm_content=removals '}
          </Link>
        </Typography>

        <Typography sx={{mt: 5}} align={"center"} variant={"h5"}> For those in the E.U. </Typography>
          <Typography sx={{m: 0}} align={"center"} variant={"body1"}>
          <Link href="https://www.google.com/webmasters/tools/legal-removal-request?complaint_type=rtbf" underline="none">
            {' https://www.google.com/webmasters/tools/legal-removal-request?complaint_type=rtbf '}
          </Link>
        </Typography>
      </Container>
    </div>
  );
}
