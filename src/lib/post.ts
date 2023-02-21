import fs from "fs/promises";
import matter from "gray-matter";
import Markdoc from "@markdoc/markdoc";
import { config } from "./markdoc/markdoc.config";

export async function readPost(filepath: string) {
  const rawString = await fs.readFile(filepath, "utf8");
  const { content } = matter(rawString);
  const ast = Markdoc.parse(content);
  const errors = Markdoc.validate(ast, config);
  if (errors.length) {
    console.error(errors);
  }
  return {
    content: Markdoc.transform(ast, config),
  };
}
