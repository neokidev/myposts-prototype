import Markdoc from "@markdoc/markdoc";
import type { Config } from "@markdoc/markdoc";

const { nodes, Tag } = Markdoc;

export const config: Config = {
  tags: {},
  nodes: {
    link: {
      children: ["inline"],
      attributes: {
        href: { type: String },
        target: { type: String },
        rel: { type: String },
      },
      ...nodes.link,
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const target = attributes.href.startsWith("http") ? "_blank" : null;
        const rel = target ? "noopener noreferrer" : null;
        return new Tag(
          this.render,
          { ...attributes, target, rel },
          node.transformChildren(config)
        );
      },
    },
  },
};
