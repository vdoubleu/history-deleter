import { useRouter } from 'next/router';

export default function Takedown() {
  const router = useRouter();
  const { title, url } = router.query;

  return (
    <div>
      <h1>{title}</h1>
      <p>
        <a href={url}>{url}</a>
      </p>
    </div>
  );

}
