/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

type Props = {
  children: string;
};

export default function Markdown({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/github-markdown.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/languages/go.min.js" />
        <script>hljs.highlightAll();</script>
      </Head>
      <ReactMarkdown
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeHighlight]}
        className="markdown-body"
      >
        {children}
      </ReactMarkdown>
    </>
  );
}
