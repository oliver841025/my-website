import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="min-h-screen w-full p-4 flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
