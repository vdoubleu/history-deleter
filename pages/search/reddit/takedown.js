import { useRouter } from 'next/router';

export default function Takedown() {
  const router = useRouter();
  const { title, url, id, author } = router.query;

  return (
    <div>
      <h3>DMCA takedown for {title}</h3>
      <p>
        <a href={url}>{url}</a>
        <br />
        post by: {author}
        <br />
        id: {id}
      </p>
    </div>
  );

}
