'use client';
import Image from 'next/image';
import Link from 'next/link';
import useStore from '../../app/hooks/useStore';
import Work from '../work/Work';
import Info from '../info/Info';
import Cross from '../cross/Cross';

export default function Card(props) {
  const { infoData, websiteData, motionData, graphicData } = props;
  const { filter, setFilter, work, setWork, info, setInfo } = useStore();
  return (
    <>
      {filter !== 'default' && <Cross />}
      {filter === 'info' && <Info infoData={infoData} />}
      {filter === 'work' && <Work websiteData={websiteData} motionData={motionData} graphicData={graphicData} />}
    </>
  );
}
