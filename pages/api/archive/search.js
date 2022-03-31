export default async function (req, res) {
  const fields = ['identifier', 'date', 'title', 'description', 'language', 'subject', 'collection' ];;

  const commaSeperate = fields.join(',');

  const startPage = (req.query.startPage || 0) + 1;

  const searchUri = `https://archive.org/advancedsearch.php?q=${req.query.q}&output=json&fl=${commaSeperate}&page=${startPage}&rows=50`;

  const response = await fetch(searchUri);
  const json = await response.json();
  const data = json.response.docs;

  res.json(data);
}
