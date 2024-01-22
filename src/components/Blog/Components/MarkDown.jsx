import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeSanitize from "rehype-sanitize";

export default function MarkDown({ markdown, type }) {
  const fixParagraphs = () => (tree) => {
    let newChildren = [];
    let foundFirstParagraph = false;
    tree.children.forEach((node) => {
      if (node.tagName === "p" && !foundFirstParagraph) {
        // Nếu là đoạn văn bản và chưa tìm thấy đoạn văn bản, thêm vào danh sách và đánh dấu đã tìm thấy
        newChildren.push(node);
        foundFirstParagraph = true;
      } else if (node.tagName === "img" && !foundFirstParagraph) {
        // Nếu là hình ảnh và chưa tìm   thấy đoạn văn bản, thêm vào danh sách
        newChildren.push(node);
        foundFirstParagraph = true;
      }
    });

    tree.children = newChildren;
  };

  const fixFormat = () => (tree) => {
    tree.children.forEach((node) => {
      if (node.tagName === "p") {
        node.children.forEach((child, index, arr) => {
          if (child.tagName === "img" || child.tagName === "pre") {
            child.properties = {
              ...child.properties,
              style: `
                width: 100%; 
                max-width: 100%; 
                height: 400px; 
                object-fit: cover;
                border-radius: 20px;
              `,
            };
          }
        });

        //type: item chỉ không xử lý đoạn chuỗi concat ...
        if (type === "item") {
          // Thêm các thuộc tính CSS chung cho đoạn văn bản
          if (node.properties && node.properties.style) {
            node.properties.style += `
            font-family: 'Montserrat';
            font-size: 1rem;
            font-weight: 400;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          `;
          } else {
            node.properties = {
              style: `
              font-family: 'Montserrat';
              font-size: 1rem;
              font-weight: 400;
              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
              overflow: hidden;
            `,
            };
          }
        }
      }
    });
  };

  const rehypePlugins = [rehypeSanitize, fixFormat, fixParagraphs];

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
