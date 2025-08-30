'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');

  return (
    <div
      className="font-bold italic flex items-center justify-between -mt-4 sticky top-0 z-50"
      style={{ minHeight: 64 }}
    >
      <div className="hover:text-blue-800">
        <a
          href="/"
          className="btn btn-ghost text-xl hover:outline-none focus:outline-none shadow-none border-none font-mono"
        >
          HSUANSKY
        </a>
      </div>
      <div className="flex items-center gap-8">
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
    </div>
  );
}
