'use client';
import useStore from '../../app/hooks/useStore';
import Work from '../work/Work';
import Info from '../info/Info';
import classes from './card.module.scss';
import { useEffect, useRef } from 'react';

export default function Card(props) {
  const { infoData, websiteData, motionData, graphicData } = props;
  const { filter, setFilter, work, setWork, info, setInfo } = useStore();

  const cardRef = useRef(null);

  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setFilter('default');
      console.log('123');
    }
  };

  // 卸載監聽
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={classes.card_wrapper}>
        {filter === 'info' && <Info infoData={infoData} />}
        {filter === 'work' && <Work websiteData={websiteData} motionData={motionData} graphicData={graphicData} />}
      </div>
    </>
  );
}
