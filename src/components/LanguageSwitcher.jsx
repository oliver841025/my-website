import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const isEn = pathname.startsWith('/en');

  const handleToggle = () => {
    const newLocale = isEn ? 'zh-TW' : 'en';
    const newPath = pathname.replace(/^\/(en|zh-TW)(\/|$)/, `/${newLocale}/`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center justify-center gap-1 select-none w-24 cursor-pointer text-sm" onClick={handleToggle}>
      <button
        type="button"
        className={`font-semibold transition-colors duration-300 min-w-[28px] text-center focus:outline-none ${
          isEn ? 'text-blue-600' : 'text-gray-400'
        }`}
        aria-pressed={isEn}
        tabIndex={0}
      >EN</button>
      <div className='-ml-[4px]'>/</div>
      <button
        type="button"
        className={`font-semibold transition-colors duration-300 min-w-[28px] text-center focus:outline-none ${
          !isEn ? 'text-blue-600' : 'text-gray-400'
        }`}
        aria-pressed={!isEn}
        tabIndex={0}
      >中文</button>
    </div>
  );
}
