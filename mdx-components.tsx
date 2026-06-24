import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 mt-12">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold text-white mb-6 mt-10">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium text-white mb-4 mt-8">{children}</h3>,
    p: ({ children }) => <p className="text-lg text-gray-300 mb-6 leading-relaxed">{children}</p>,
    strong: ({ children }) => <strong className="font-semibold text-blue-400">{children}</strong>,
    ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">{children}</ul>,
    li: ({ children }) => <li className="text-lg">{children}</li>,
    hr: () => <hr className="border-gray-800 my-12" />,
    
    // New styles for the visual breakups
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 bg-orange-500/10 px-6 py-4 rounded-r-lg text-orange-200 my-8 italic">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#0d1117] border border-gray-800 rounded-lg p-6 overflow-x-auto my-8 text-sm text-gray-300 font-mono shadow-inner">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800/60 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    
    ...components,
  }
}