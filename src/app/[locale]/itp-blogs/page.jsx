'use client';
import { Link } from '@/i18n/routing';
import PageTitle from '@/components/PageTitle';

const hypercinemaWeeks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

export default function ItpBlogsPage() {
  return (
    <>
      <PageTitle />
      <section className="mx-auto w-full max-w-3xl py-8">
        <h3 className="text-2xl font-bold">Hypercinema</h3>
        <ul className="mt-4 list-disc pl-6">
          {hypercinemaWeeks.map((week) => (
            <li key={week}>
              <Link
                href={`/itp-blogs/hypercinema/${week}`}
                className="text-blue-600 underline"
              >
                Week {week}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-full max-w-3xl py-8">
        <h3 className="text-2xl font-bold">Physical Computing</h3>
      </section>
    </>
  );
}