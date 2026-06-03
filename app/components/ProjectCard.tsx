import { Shield, Server, Bot } from 'lucide-react';

export function ProjectCard({ title, desc, challenge, solution, impact, tags, iconType }) {
  const icons = {
    shield: <Shield className="w-8 h-8 text-[#ff9900] mb-4" />,
    server: <Server className="w-8 h-8 text-[#ff9900] mb-4" />,
    bot: <Bot className="w-8 h-8 text-[#ff9900] mb-4" />
  };

  return (
    <div className="bg-[#1a1f2e] border border-[#232f3e] p-6 rounded-lg transition-all duration-300 hover:border-[#ff9900] hover:-translate-y-2 shadow-xl">
      {icons[iconType]}
      <h3 className="text-xl font-bold text-white tracking-tight mb-1">{title}</h3>
      <p className="text-[#aab7b8] text-sm mb-4 font-mono">{desc}</p>
      
      <div className="flex gap-2 mb-6">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-[#232f3e] text-[#aab7b8] text-[10px] uppercase tracking-wider px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        <p className="text-[10px] text-white uppercase tracking-tighter font-bold">Challenge</p>
        <p className="text-sm text-[#aab7b8]">{challenge}</p>
        
        <p className="text-[10px] text-white uppercase tracking-tighter pt-2 font-bold">Solution</p>
        <p className="text-sm text-[#aab7b8]">{solution}</p>
        
        <p className="text-[10px] text-[#ff9900] uppercase tracking-tighter pt-2 font-bold">Impact</p>
        <p className="text-sm text-white font-medium">{impact}</p>
      </div>
    </div>
  );
}