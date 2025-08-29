'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const DrawerProject = () => {
  const t = useTranslations('works.drawerProject');
  const [showReal, setShowReal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div className="flex w-full items-center border overflow-x-auto mt-4">
        <Image
          src="/drawer_project/drawer_1.png"
          alt={t('imgAlt1')}
          width={650}
          height={600}
          onMouseEnter={() => setShowReal(true)}
          onMouseLeave={() => setShowReal(false)}
          onMouseMove={handleMouseMove}
          className="relative"
        />
        {showReal && (
          <div
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y + 20,
              pointerEvents: 'none',
              zIndex: 1000,
            }}
          >
            <Image
              src="/drawer_project/drawer_1_real.jpg"
              alt={t('imgAltReal')}
              width={200}
              height={200}
              className="opacity-90"
            />
          </div>
        )}
        <Image src="/drawer_project/drawer_2.png" alt={t('imgAlt2')} width={650} height={600} />
        <Image src="/drawer_project/drawer_3.png" alt={t('imgAlt3')} width={650} height={600} />
        <Image src="/drawer_project/drawer_4.png" alt={t('imgAlt4')} width={650} height={600} />
        <Image src="/drawer_project/drawer_5.png" alt={t('imgAlt5')} width={650} height={600} />
        <Image src="/drawer_project/drawer_6.png" alt={t('imgAlt6')} width={650} height={600} />
      </div>
      <div className="text-xs font-medium mt-2">
        <span>{t('desc')}</span>
      </div>
    </>
  );
};

export default DrawerProject;
