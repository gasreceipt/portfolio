interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
    allTags: string[];
}

export function FilterBar({ searchQuery, setSearchQuery, selectedTag, setSelectedTag, allTags }: FilterBarProps) {
    return (
        <div className="w-full max-w-2xl mx-auto mb-16 space-y-8">
            {/* Search Input */}
            <div className="relative group">
                <div className="absolute -top-3 left-4 bg-white dark:bg-black px-2 text-xs font-bold uppercase border border-black dark:border-white z-10">
                    Search_Query
                </div>
                <input
                    type="text"
                    placeholder="ENTER_KEYWORDS..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-transparent border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] outline-none transition-all duration-100 text-lg placeholder:text-zinc-500 font-mono uppercase"
                />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`flex items-center gap-2 text-sm font-bold uppercase hover:underline decoration-2 underline-offset-4 ${selectedTag === null ? 'text-blue-600 dark:text-green-400' : 'text-black dark:text-white'}`}
                >
                    <span className={`w-4 h-4 border-2 border-black dark:border-white flex items-center justify-center ${selectedTag === null ? 'bg-black dark:bg-white' : ''}`}>
                        {selectedTag === null && <div className="w-2 h-2 bg-white dark:bg-black" />}
                    </span>
                    [ALL]
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        className={`flex items-center gap-2 text-sm font-bold uppercase hover:underline decoration-2 underline-offset-4 ${selectedTag === tag ? 'text-blue-600 dark:text-green-400' : 'text-black dark:text-white'}`}
                    >
                        <span className={`w-4 h-4 border-2 border-black dark:border-white flex items-center justify-center ${selectedTag === tag ? 'bg-black dark:bg-white' : ''}`}>
                            {selectedTag === tag && <div className="w-2 h-2 bg-white dark:bg-black" />}
                        </span>
                        [{tag}]
                    </button>
                ))}
            </div>
        </div>
    );
}
