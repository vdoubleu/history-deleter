import { Typography, Container } from "@mui/material";

import NavBar from '../../components/NavBar';

export default function About() {
  return (
    <div>
      <NavBar />

      <Container>
      <Typography sx={{m: 2}} align={"center"} variant={"h2"}> About Us </Typography>
      
      <Typography sx={{}} align={"center"} variant={"h5"}>
        This site helps those who wish to have traces of themselves removed from the internet. If there is content that you may deem undesirable, you can use our systems to help search and find the information and to remove it.
      </Typography>
      </Container>
    </div>
  );
}
