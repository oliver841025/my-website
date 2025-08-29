'use client';
import WorksContent from '@/components/WorksContent';
import PageTitle from '@/components/PageTitle';

export default function WorksPage() {

  return (
    <>
      <PageTitle />
      <div className="mt-20">
        <WorksContent />
      </div>
    </>
  );
}
