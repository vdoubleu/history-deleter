import { Typography, Container } from "@mui/material";
import Link from '@mui/material/Link';

import NavBar from '../../components/NavBar';

export default function Google() {
  return (
    <div>
      <NavBar />

      <Container>
      <Typography sx={{m: 5}} align={"center"} variant={"h4"}> Taking down content from other Google products </Typography>

        <Typography sx={{m: 2}} align={"center"} variant={"body1"}>
        If you need to request a take down of content on Google's other products, use this link:<br></br>
        <Link href="https://support.google.com/legal/troubleshooter/1114905?hl=en" underline="none">
          {' https://support.google.com/legal/troubleshooter/1114905?hl=en '}
        </Link>
        </Typography>
      </Container>
    </div>
  );
}
