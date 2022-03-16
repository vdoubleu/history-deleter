import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function RedditCallback() {
  const router = useRouter();
  const {code} = router.query;

  const [token, setToken] = useState('');

  useEffect(() => {
    if (code) {
      fetch(`/api/reddit/token?code=${code}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.access_token) {
          setToken(res.access_token);
        }
      })
    }
  }, [code]);

  return (
    <div>
      <h1>RedditCallback</h1>
      <p> {code} </p>
      <p> {token} </p>
      <p>
        <a href="/">Go to home</a>
      </p>
    </div>
  );
}
