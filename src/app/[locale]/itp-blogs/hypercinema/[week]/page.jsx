import Week01 from './components/Week01';
import Week02 from './components/Week02';

const HypercinemaPage = ({ params }) => {
  const { week } = params;

  switch (week) {
    case 'week-01':
      return <Week01 />;
    case 'week-02':
      return <Week02 />;
    default:
      return <div>Cannot find {week}</div>;
  }
};

export default HypercinemaPage;
