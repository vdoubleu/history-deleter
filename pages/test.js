export default function Test() {
  function handleButton(_e) {
    fetch('/api/test-route')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleButton}> test api route </button>
    </div>
  );
}
