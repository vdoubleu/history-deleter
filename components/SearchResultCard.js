import { Card, CardContent, CardActions, Button, Link, Typography } from '@mui/material';

export default function SearchResultCard(props) {
  const { URL, title, snippet, type, redirect, onRemove, data } = props;

  //console.log(data.identifier);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {snippet}
        </Typography>
        <Typography variant="caption" component="p">
          {type}
        </Typography>
        <Link href={URL} target="_blank">
          {URL}
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={redirect} onClick={() => onRemove(data.identifier)} target="_blank">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}


