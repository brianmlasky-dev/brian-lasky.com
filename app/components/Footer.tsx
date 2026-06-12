'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">Brian Lasky</h3>
        <p className="text-gray-400 mb-8">Building Resilient & Governed Cloud Infrastructure</p>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            © 2026 Brian Lasky. Built with Next.js • Managed via Terraform • Deployed via Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}