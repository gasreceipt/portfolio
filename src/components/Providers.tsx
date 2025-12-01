'use client';

import { ThemeProvider } from 'next-themes';
import { ReactLenis } from 'lenis/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <ReactLenis root options={{ duration: 0.8, smoothWheel: true }}>
                {children}
            </ReactLenis>
        </ThemeProvider>
    );
}
