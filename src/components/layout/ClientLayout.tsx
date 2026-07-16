'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define routes where header and footer should be hidden
  const hideHeaderFooter = pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin');

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
