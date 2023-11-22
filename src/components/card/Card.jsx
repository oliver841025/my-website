'use client';
import useStore from '../../app/hooks/useStore';
import Work from '../work/Work';
import Info from '../info/Info';

export default function Card(props) {
  const { infoData, websiteData, motionData, graphicData } = props;
  const { filter, setFilter, work, setWork, info, setInfo } = useStore();
  return (
    <>
      {filter === 'info' && <Info infoData={infoData} />}
      {filter === 'work' && <Work websiteData={websiteData} motionData={motionData} graphicData={graphicData} />}
    </>
  );
}
