'use client';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../styles/global.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [filter, setFilter] = useState(null);
  return (
    <html lang="en">
      <body>
        <Header filter={filter} setFilter={setFilter} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
