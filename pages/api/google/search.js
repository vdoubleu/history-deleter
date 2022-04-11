/**
 * route to call to get google search results
 * METHODS: GET
 * @param {string} q - the query to search for
 * @param {number} pageIndex - the index of the page to return, starts at 0
 */
export default async function handler(req, res) {
  const CSE_KEY = process.env.CSE_KEY;
  const CSE_CX = process.env.CSE_CX;
  const CSE_URL = process.env.CSE_URL;
  const startIndex = (req.query.pageindex * 10) || 0; // converting page index to result index

  if (startIndex < 0) {
    res.status(400).send({
      error: 'pageIndex must be greater than 0',
    });
  }

  const searchType = req.query.searchtype ? `searchType=${req.query.searchtype}` : '';

  try {
    const googleResRaw = await fetch(`${CSE_URL}?key=${CSE_KEY}&cx=${CSE_CX}&q=${req.query.q}&num=10&start=${startIndex}&${searchType}`);
    const googleResJson = await googleResRaw.json();

    console.log(googleResJson);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(googleResJson.items);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
