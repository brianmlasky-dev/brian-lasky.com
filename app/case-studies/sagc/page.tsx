import Content from './content.mdx';

export default function SAGCCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-invert lg:prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-blue-400 prose-li:text-gray-300 prose-hr:border-gray-700">
          <Content />
        </article>
      </div>
    </div>
  );
}
