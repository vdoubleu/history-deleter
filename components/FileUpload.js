import { Box, Button } from '@mui/material';

export default function FileUpload(props) {
  const text = props.text;
  const onUpload = props.onUpload;

  return (
    <Box>
      <input
        style={{ display: 'none' }}
        accept="image/*"
        id="raised-button-file"
        multiple
        type="file"
        onChange={onUpload}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span" sx={{ m: 1 }}>
          { text } 
        </Button>
      </label>
    </Box> 
  )
}
