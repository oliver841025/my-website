import Week01 from './components/Week01';

const HypercinemaPage = ({params}) => {
    const {week} = params;

    switch (week) {
        case '01':
            return <Week01 />;
        default:
            return<div>Cannot find Week {week}</div>
    }

}

export default HypercinemaPage;