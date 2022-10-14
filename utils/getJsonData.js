import fs from "fs/promises";
import path from "path";

async function getJsonData() {
  const file = path.join(process.cwd(), "utils", "db.json");
  const db = await fs.readFile(file);
  const data = await JSON.parse(db);

  return data;
}

export default getJsonData;
