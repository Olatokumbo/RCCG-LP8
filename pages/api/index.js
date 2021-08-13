// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dataPath = path.join(process.cwd(), 'utils', 'data.json');
  let data = fs.readFileSync(dataPath);
  data = JSON.parse(data);
  res.status(200).json(data);
}
