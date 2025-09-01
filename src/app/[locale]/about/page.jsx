'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const AboutPage = () => {
  const t = useTranslations('about');

  const [isHovered, setIsHovered] = useState(false);

  // 取出物件型陣列
  const educationList = Object.values(t.raw('education_list'));
  const workList = Object.values(t.raw('work_list'));
  const activityList = Object.values(t.raw('activity_list'));
  const skillsList = Object.values(t.raw('skills_list'));

  return (
    <>
      <div
        className={`flex flex-col md:flex-row gap-4 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      >
        <Image src="/me_photo_1.png" alt="Me_1" width={200} height={200} className="object-cover" />
        <Image src="/me_photo_2.png" alt="Me_2" width={200} height={200} className="object-cover" />
        <Image src="/me_photo_3.png" alt="Me_3" width={200} height={200} className="object-cover" />
      </div>

      <div
        className="py-4 pl-4 cursor-pointer fixed top-1/2 right-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <p className='-mb-6 ml-5 text-xs font-extrabold text-blue-800'>\ Pat me /</p>
        <Image src="/rainbow_cat_running.gif" alt="Rainbow Cat Running" width={100} height={100} className="-scale-x-100"/>
      </div>

      <div className="mt-4 flex flex-col gap-20 font-medium p-4 leading-relaxed">
        <div className="flex flex-col gap-6">
          <h2>{t('brief_intro')}</h2>
          <p>
            {t.rich('first_paragraph', {
              bold: (chunks) => <span className="italic font-extrabold text-md">{chunks}</span>,
            })}
          </p>
          <p>{t('second_paragraph')}</p>
          <p>{t('third_paragraph')}</p>
          <p>{t('fourth_paragraph')}</p>
          <p>
            {t.rich('fifth_paragraph', {
              bold: (chunks) => <span className="italic font-extrabold text-md">{chunks}</span>,
            })}
          </p>
          <p>{t('sixth_paragraph')}</p>
        </div>

        <div className="grid grid-cols-5 text-sm max-md:grid-cols-1 max-md:gap-8">
          {/* 學歷+經歷 */}
          <div className="flex flex-col gap-10 col-span-2">
            <section className="flex-col flex">
              <h4>{t('education_title')}</h4>
              <div className="flex flex-col gap-1 mt-6 text-xs">
                {educationList.map((item, idx) => (
                  <p className="flex gap-4" key={idx}>
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <section className="flex flex-col">
              <h4>{t('work_title')}</h4>
              <div className="mt-6 text-xs flex flex-col gap-1">
                {workList.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </section>

            <section className="flex flex-col">
              <h4>{t('activity_title')}</h4>
              <div className="mt-6 text-xs flex flex-col gap-1">
                {activityList.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </section>
          </div>
          {/* 技能 */}
          <section className="col-span-2">
            <h4>{t('skills_title')}</h4>
            <div className="text-xs mt-6 flex flex-wrap gap-2">
              {skillsList.map((item, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 rounded-md">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
