import Button from '@mui/material/Button';

export default function Test() {
  function handleButton(_e) {
    // fetch('/api/fb/auth')
    //   .then(res => res.text())
    //   .then(body => console.log(body));
      // .then(res => res.json())
      // .then(data => console.log(data))
      // .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={handleButton} variant="contained"> test api route </Button>
      <a href="/api/fb/auth">test api route</a>
    </div>
  );
}
