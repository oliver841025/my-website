'use client';
import { Link } from '@/i18n/routing';
import PageTitle from '@/components/PageTitle';

const hypercinemaWeeks = [
  'week-01',
  'week-02',
  'week-03',
  'week-04',
  'week-05',
  'week-06',
  'week-07',
  'week-08',
  'week-09',
  'week-10',
];
const pcomWeeks = [
  {
    week: 'week-01',
    title: 'Learned how to use wire cutters safely without cutting myself',
  },
  {
    week: 'week-02',
    title: '',
  },
  {
    week: 'week-03',
    title: '',
  },
  {
    week: 'week-04',
    title: '',
  },
  {
    week: 'week-05',
    title: '',
  },
  {
    week: 'week-06',
    title: '',
  },
  {
    week: 'week-07',
    title: '',
  },
  {
    week: 'week-08',
    title: '',
  },
  {
    week: 'week-09',
    title: '',
  },
  {
    week: 'week-10',
    title: '',
  },
];

export default function ItpBlogsPage() {
  return (
    <>
      <PageTitle />
      <section className="mx-auto w-full max-w-3xl py-8">
        <h3 className="text-2xl font-bold">Hypercinema</h3>
        <ul className="mt-4 list-disc pl-6">
          {hypercinemaWeeks.map((week) => (
            <li key={week}>
              <Link href={`/itp-blogs/hypercinema/${week}`} className="text-blue-600">
                {week}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-full max-w-3xl py-8">
        <h3 className="text-2xl font-bold">Physical Computing</h3>
        <ul className="mt-4 list-disc pl-6">
          {pcomWeeks.map(({ week, title }) => (
            <li key={week}>
              <Link href={`/itp-blogs/pcom/${week}`} className="text-blue-600" aria-label={`${week} ${title}`}>
                {week} {title && `${title}`}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
