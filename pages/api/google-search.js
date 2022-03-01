export default async function handler(req, res) {
  const CSE_KEY = process.env.CSE_KEY;
  const CSE_CX = process.env.CSE_CX;
  const CSE_URL = process.env.CSE_URL;

  try {
    console.log(CSE_URL);
    const googleResRaw = await fetch(`${CSE_URL}?key=${CSE_KEY}&cx=${CSE_CX}&q=${req.query.q}`);
    const googleResJson = await googleResRaw.json();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(googleResJson.items);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
