'use client';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="w-full py-32 md:py-48 flex flex-col items-center justify-center text-center px-4">
            <div className="border-2 border-black dark:border-white p-8 bg-white dark:bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4"
                >
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase text-black dark:text-white border-b-4 border-black dark:border-white pb-4 break-all sm:break-normal">
                        Maxwell_Wickersham
                    </h1>
                    <div className="flex justify-between items-center text-xs font-bold uppercase border-b border-black dark:border-white pb-2 mb-4">
                        <span>Status: Online</span>
                        <span>Loc: Earth</span>
                        <span>Role: Builder</span>
                    </div>
                    <p className="text-xl md:text-2xl text-black dark:text-white font-mono leading-relaxed text-left">
                        {'>'} I build websites.<span className="animate-pulse">_</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
