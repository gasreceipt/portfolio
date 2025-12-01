'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
    return (
        <nav className="w-full py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 bg-white dark:bg-black border-b-2 border-black dark:border-white">
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white">
                Maxwell_Wickersham
            </Link>
            <div className="flex gap-4 items-center">
                <ThemeToggle />
            </div>
        </nav>
    );
}
