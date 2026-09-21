import Week01 from './components/Week01';

const PcomPage = ({ params }) => {
  const { week } = params;

  switch (week) {
    case 'week-01':
      return <Week01 />;
    default:
      return <div>Cannot find {week}</div>;
  }
};

export default PcomPage;
