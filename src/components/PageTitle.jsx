import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathname = usePathname();
  const title = pathname.split('/').filter(Boolean).pop();

  return (
    <h1 className="text-3xl font-bold text-center mb-4 pb-2 capitalize border-b-4 border-black w-fit mx-auto mt-12">
      {title}
    </h1>
  );
};

export default PageTitle;
