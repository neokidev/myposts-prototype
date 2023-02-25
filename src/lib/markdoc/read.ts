import Markdoc from "@markdoc/markdoc";
import { config } from "./markdoc.config";

export async function parseAndTransform(content: string) {
  const ast = Markdoc.parse(content);

  const errors = Markdoc.validate(ast, config);
  if (errors.length) {
    console.error(errors);
    throw new Error("Markdoc validation error");
  }

  return Markdoc.transform(ast, config);
}
