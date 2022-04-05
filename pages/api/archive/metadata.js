export default async function (req, res) {
  const response = await fetch(`https://archive.org/metadata/${req.query.id}`);
  const json = await response.json();

  res.json(json);
}
