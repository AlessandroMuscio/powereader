// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { bionicText, bionicTextMarkdown } from "../../library/textTransform";

export default function handler(req, res) {
  const { text, type } = req.body;
  if (text === "") {
    res.status(400).json({ error: "No text provided" });
  } else if (type === "html") {
    res.status(200).json({ out: bionicText(text) });
  } else if (type === "md") {
    res.status(200).json({ out: bionicTextMarkdown(text) });
  } else {
    res.status(400).json({ error: "Unknown Format" });
  }
}
