import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeSanitize from "rehype-sanitize";

const removeParagraphTags = () => (tree) => {
  tree.children.forEach((node) => {
    if (
      node.tagName === "p" &&
      node.children.length === 1 &&
      node.children[0].tagName === "img"
    ) {
      tree.children.splice(tree.children.indexOf(node), 1, node.children[0]);
    }
  });
};

const fixImages = () => (tree) => {
  tree.children.forEach((node) => {
    if (node.tagName === "img" || node.tagName === "pre") {
      node.properties = node.properties || {};
      node.properties.style = "max-width: 100%; height: auto";
    }
  });
};

const rehypePlugins = [rehypeSanitize, removeParagraphTags, fixImages];

export default function MarkDown({ markdown }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={rehypePlugins}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={dracula}
              PreTag="div"
              language={match[1]}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}
