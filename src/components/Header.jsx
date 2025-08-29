'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('header');

  return (
    <div
      className=" font-bold italic grid grid-cols-[auto_1fr_auto_auto] items-center -mt-4 sticky top-0 z-50"
      style={{ minHeight: 64 }}
    >
      <div className="hover:text-blue-800">
        <a
          href="/"
          className="btn btn-ghost text-xl  hover:outline-none focus:outline-none shadow-none border-none font-mono"
        >
          HSUANSKY
        </a>
      </div>
      <div /> {/* 空白區域撐開 */}
      <div className="justify-self-end mr-8">
        <LanguageSwitcher />
      </div>
      <nav className="space-x-4 w-40 justify-self-end">
        <Link
          href="/about"
          className="btn btn-ghost  hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
        >
          {t('me')}
        </Link>
        <Link
          href="/works"
          className="btn btn-ghost  hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
        >
          {t('works')}
        </Link>
        <Link
          href="/articles"
          className="btn btn-ghost  hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
        >
          {t('articles')}
        </Link>
      </nav>
    </div>
  );
}
