import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const sites = ["reddit", "twitter", "google", "pornhub", "bing"];

export default function (props) {
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
            <Typography>{site}</Typography>
          </Box>
        )
      })
    }
    </Box>
  </Modal>
  );
}
