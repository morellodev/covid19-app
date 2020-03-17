import fetch from "node-fetch";

export default async (req, res) => {
  const data = await fetch("https://bing.com/covid/data").then(response =>
    response.json()
  );

  res.status(200).json(data);
};
