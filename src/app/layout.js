import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Nifas & ASI Check | Skrining Mandiri Ibu',
  description: 'Website skrining mandiri terpadu untuk mengecek kondisi nifas, menyusui (ASI), dan kesehatan mental ibu setelah melahirkan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <Navbar />
        <main className="container animate-fade-in" style={{ padding: '40px 20px', minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
