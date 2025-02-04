// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// export default function MarkdownRenderer({ markdown }: { markdown: string }) {
//     // Override react-markdown elements to add class names
//     // const P = ({ children }) => <p className="md-post-p">{children}</p>
//     // const Li = ({ children }) => <li className="md-post-li">{children}</li>
//     // const H4 = ({ children }) => <h4 className="md-post-h4">{children}</h4>
//     // const Hr = () => <hr className="md-post-hr" />

//     const mdBody = <ReactMarkdown
//         remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
//         // linkTarget='_blank' // Append target _blank to links so they open in new tab/window
//         components={{
//             // p: P,
//             // li: Li,
//             // h4: H4,
//             // hr: Hr,
//             code({ className, children, ...props }) {
//                 const match = /language-(\w+)/.exec(className || '')
//                 return match ? (
//                     <SyntaxHighlighter
//                         style={a11yDark as any}
//                         language={match[1]}
//                         PreTag="div"
//                         {...props}
//                     >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
//                 ) : (
//                     <code className="md-post-code" {...props}>
//                         {children}
//                     </code>
//                 )
//             },
//         }}
//     >
//         {markdown}
//     </ReactMarkdown>

//     return mdBody;
// }