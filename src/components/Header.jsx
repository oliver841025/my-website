'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';

import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-bold italic flex items-center justify-between sticky top-0 z-50">
      <div className="hover:text-blue-800">
        <a
          href="/"
          className="btn btn-ghost text-xl hover:outline-none focus:outline-none shadow-none border-none font-mono"
        >
          HSUANSKY
        </a>
      </div>
      {/* 桌機版選單 */}
      <div className="items-center gap-8 hidden md:flex">
        <nav className="flex space-x-4">
          <Link
            href="/about"
            className="btn btn-ghost hover:bg-transparent hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            {t('me')}
          </Link>
          <Link
            href="/works"
            className="btn btn-ghost hover:bg-transparent hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            {t('works')}
          </Link>
          <Link
            href="/articles"
            className="btn btn-ghost hover:bg-transparent hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            {t('articles')}
          </Link>
        </nav>
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* 手機版漢堡按鈕 */}
      <div className="md:hidden flex items-center justify-center">
        <button className="p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <span className="block w-5 h-0.5 bg-black mb-1"></span>
          <span className="block w-5 h-0.5 bg-black mb-1"></span>
          <span className="block w-5 h-0.5 bg-black"></span>
        </button>
        {/* 手機版下拉選單 */}
        {menuOpen && (
          <div className="absolute top-7 right-0 bg-white rounded-lg shadow-lg flex flex-col items-end p-4 z-50 min-w-[140px]">
            <Link
              href="/about"
              className="w-full text-right py-2 px-4 hover:bg-slate-100 rounded"
              onClick={() => setMenuOpen(false)}
            >
              {t('me')}
            </Link>
            <Link
              href="/works"
              className="w-full text-right py-2 px-4 hover:bg-slate-100 rounded"
              onClick={() => setMenuOpen(false)}
            >
              {t('works')}
            </Link>
            <Link
              href="/articles"
              className="w-full text-right py-2 px-4 hover:bg-slate-100 rounded"
              onClick={() => setMenuOpen(false)}
            >
              {t('articles')}
            </Link>
            <div className="w-full flex justify-end mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
