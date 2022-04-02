import { getImageFromSite } from "../utils/utilFunc";

import Image from "next/image";

import { Modal, Box, Typography, Button, Avatar } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center"
};

export default function (props) {
  const sites = props.sites;

  function setSiteAndClose(site) {
    props.handleClose();
    props.setSite(site);
  }

  return (
    <Modal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    {
      sites.map((site, index) => {
        return (
          <Box style={{}} key={index}>
            <Button 
              onClick={() => setSiteAndClose(site)} >
                <Box>
                  <Image src={getImageFromSite(site)} width={150} height={150} />
                  <Typography>{site}</Typography>
                </Box>
            </Button>
          </Box>
        )
      })
    }
    </Box>
  </Modal>
  );
}
