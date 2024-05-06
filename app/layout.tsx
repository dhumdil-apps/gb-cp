import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavSkeleton from '@/app/components/layout/NavSkeleton';
import HeaderPlaceholder from '@/app/components/layout/HeaderPlaceholder';
import RegisterSvgs from '@/app/components/layout/RegisterSvgs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'GymBeam',
    description: 'GymBeam Category Page',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <header className="h-18 fixed left-0 top-0 z-10 w-full bg-base-100 py-2 shadow">
                    <HeaderPlaceholder />
                </header>

                <nav className="fixed left-0 top-0 hidden h-dvh w-80 flex-col items-center justify-start pt-20 md:flex">
                    <NavSkeleton />
                </nav>

                <main className="pt-20 md:pl-80">{children}</main>

                <RegisterSvgs />
            </body>
        </html>
    );
}
