import Week01 from './components/Week01';
import Week02 from './components/Week02';
import Week03 from './components/Week03';
import Week04 from './components/Week04';
import Week05 from './components/Week05';
import Week06 from './components/Week06';
import Week07 from './components/Week07';

const PcomPage = ({ params }) => {
  const { week } = params;

  switch (week) {
    case 'week-01':
      return <Week01 />;
    case 'week-02':
      return <Week02 />;
    case 'week-03':
      return <Week03 />;
    case 'week-04':
        return <Week04 />;
    case 'week-05':
        return <Week05 />;
    case 'week-06':
      return <Week06 />;
    case 'week-07':
      return <Week07 />;
    default:
      return <div>Cannot find {week}</div>;
  }
};

export default PcomPage;
