import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full py-8 bg-white dark:bg-zinc-900 border-t-2 border-black dark:border-zinc-700 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Maxwell Wickersham | maxwell.ltd
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium items-center">
                    <a href="mailto:maxwell@stack.ceo" className="hover:text-black dark:hover:text-white transition-colors">
                        maxwell@stack.ceo
                    </a>
                    <a href="https://linkedin.com/in/mxwick" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://instagram.com/mxwick" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
