import type { Metadata } from 'next';
import './globals.css';

import LanguageSkeleton from '@/app/components/layout/LanguageSkeleton';
import NavSkeleton from '@/app/components/layout/NavSkeleton';
import HeaderSkeleton from '@/app/components/layout/HeaderSkeleton';
import FooterSkeleton from '@/app/components/layout/FooterSkeleton';
import RegisterSvgs from '@/app/components/layout/RegisterSvgs';

export const metadata: Metadata = {
    title: 'Sports Nutrition | GymBeam.com',
    description:
        'Sports Nutrition is a category of products that covers proteins, amino acids, weight gainers and other dietary supplements. Get good energy for every sport.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body>
                <LanguageSkeleton />
                <div className="container mx-auto max-w-screen-xl px-4">
                    <HeaderSkeleton />

                    <div className="flex gap-12">
                        <NavSkeleton />
                        <main>{children}</main>
                    </div>
                </div>

                <FooterSkeleton />
                <RegisterSvgs />
            </body>
        </html>
    );
}
