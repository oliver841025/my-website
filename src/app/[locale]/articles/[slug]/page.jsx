import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

const ArticlePage = ({ params }) => {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const filePath = path.join(process.cwd(), 'posts', decodedSlug);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="prose mx-auto">
      <ReactMarkdown>{fileContent}</ReactMarkdown>
    </div>
  );
};

export default ArticlePage;
