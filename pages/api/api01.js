function handler(req, res) {
  res
    .status(200)
    .json({ items: [{ item: "item1" }, { item: "item2" }, { item: "item3" }] });
}

export default handler;
