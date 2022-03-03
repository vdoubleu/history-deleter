import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

export default function SearchResultCard(props) {
  const { URL, title, snippet } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {snippet}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={URL} target="_blank">
          {URL}
        </Button>
      </CardActions>
    </Card>
  );
}


