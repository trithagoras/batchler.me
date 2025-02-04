import fs from "fs";
import path from "path";
import { remark } from "remark";

export async function getPostContent(id: string) {
  const postsDir = path.join(process.cwd(), "assets", "posts");
  const filePath = path.join(postsDir, `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const processedContent = await remark()
  .process(fileContent);
  return processedContent.toString();
}
