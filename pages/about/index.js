import { Typography, Container } from "@mui/material";

import NavBar from '../../components/NavBar';

export default function About() {
  return (
    <div>
      <NavBar />

      <Container>
      <Typography sx={{m: 2}} align={"center"} variant={"h3"}> About Us </Typography>
      <Typography sx={{m: 2}} align={"left"} variant={"h4"}> Inspiration: </Typography>
      
      <Typography sx={{m: 2}} align={"left"} variant={"h6"}>
              Our idea comes from a guest speaker. She participated in a lesbian porn magazine, On Our Backs, which ran from 1984 to 2004. The magazine was digitized in 2016, bringing public exposure that might harm the former models in their personal and professional lives. What's more, there was no good way to remove the magazine from the internet. We hope that our project gives individuals like her a chance to remove private and unwanted information from archive sites and social media. 
      </Typography>

      <Typography sx={{m: 2}} align={"left"} variant={"h4"}> What it does:</Typography>
      <Typography sx={{m: 2}} align={"left"} variant={"h6"}> 
            Our site helps individuals who wish to have traces of themselves removed from the internet. We hope that our project will enable victims to take down intimate media of themselves on the internet and protect themselves from their attackers. We want to help individuals who are discriminated against on the internet to have the right to be forgotten and have the right to take control of their privacy. If there is content that you may deem undesirable, you can use our systems to help search and find the information and to remove it. Our site now supports sites including Google, Twitter, Reddit, PornHub, Internet Archive and search by image.
    You can find traces of yourself by simply searching your username, posts, and comments.
      </Typography>

      <Typography sx={{m: 2}} align={"left"} variant={"h4"}> This is the link to our code base:</Typography>
      <Typography sx={{m: 2}} align={"left"} variant={"h6"}> 
      https://github.com/vdoubleu/history-deleter
             </Typography>

      </Container>
    </div>
  );
}
