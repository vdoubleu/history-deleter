import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function FacebookCallback() {
  const router = useRouter();
  const {code} = router.query;

  const [token, setToken] = useState('');

  useEffect(() => {
    if (code) {
      fetch(`/api/fb/token?code=${code}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.token) {
          setToken(res.token);
        }
      })
    }
  }, [code]);

  return (
    <div>
      <h1>FacebookCallback</h1>
      <p> {code} </p>
      <p>
        <a href="/">Go to home</a>
      </p>
    </div>
  );
}
