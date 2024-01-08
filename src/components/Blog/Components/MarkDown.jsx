import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeSanitize from "rehype-sanitize";

const removeParagraphTags = () => (tree) => {
  const newChildren = [];

  tree.children.forEach((node) => {
    if (node.tagName === "p" && tree.tagName !== "pre") {
      // Append the children of the <p> node to the newChildren array
      newChildren.push(...node.children);
    } else {
      // Keep other nodes as they are
      newChildren.push(node);
    }
  });

  // Replace the existing children array with the new one
  tree.children = newChildren;
};

const fixImages = () => (tree) => {
  tree.children.forEach((node) => {
    if (node.tagName === "img" || node.tagName === "pre") {
      node.properties = node.properties || {};
      node.properties.style =
        "max-width: 100%; height: 400px; object-fit: cover";
      // Thêm border-radius và các thuộc tính CSS khác nếu cần
      node.properties.style += "; border-radius: 20px";
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
