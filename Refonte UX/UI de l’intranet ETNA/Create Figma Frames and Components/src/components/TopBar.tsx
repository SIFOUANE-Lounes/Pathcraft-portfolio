import { Search } from 'lucide-react';

export function TopBar() {
  return (
    <div className="h-20 bg-[--bg-tertiary] border-b border-[--border-color] px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[--text-secondary]" size={20} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-12 pr-4 py-3 bg-[--bg-secondary] text-[--text-primary] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center text-white">
          JD
        </div>
      </div>
    </div>
  );
}