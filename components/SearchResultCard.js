import { Card, CardContent, CardActions, Button, Link, Typography } from '@mui/material';

export default function SearchResultCard(props) {
  /**
   * URL: the url of the result
   * title: the title of the result
   * snippet: a short snippet of the content of the result
   * type: description of the source of the result
   * redirect: redirects to url (one o fthis or onRemove should be set to null)
   * onRemove: removes the result from the list
   */
  const { URL, title, snippet, type, redirect, onRemove } = props;

  function handleOnClick() {
    if (onRemove) {
      onRemove();
    }
  }

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
        <Button size="small" color="primary" href={redirect} onClick={handleOnClick} target="_blank">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}


