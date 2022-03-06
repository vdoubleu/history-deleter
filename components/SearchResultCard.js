import { Card, CardContent, CardActions, Button, Link, Typography } from '@material-ui/core';

export default function SearchResultCard(props) {
  const { URL, title, snippet, type } = props;

  const removeGoogleResultLink = "https://www.google.com/webmasters/tools/legal-removal-request?complaint_type=rtbf&visit_id=0-636496126362623931-44683020&rd=1&pli=1";

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
        <Button size="small" color="primary" href={removeGoogleResultLink} target="_blank">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}


