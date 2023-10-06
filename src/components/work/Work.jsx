'use client';
import classes from './work.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Website from '../website/Website';
import Motion from '../motion/Motion';
import Graphic from '../graphic/Graphic';
import Cross from '../cross/Cross';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Work(props) {
  const { websiteData, motionData, graphicData } = props;
  const [cardFilter, setCardFilter] = useState('website');
  const [filter, setFilter] = useState(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isCross, setIsCross] = useState(false);

  useEffect(() => {
    const targetSearchParams = searchParams.toString();
    if (targetSearchParams === 'filter=work') {
      setIsCross(true);
    } else {
      setIsCross(false);
    }
  }, [pathname, searchParams]);

  const handleClick = (param) => {
    setCardFilter(param);
  };

  return (
    <>
      <div className={classes.wrapper}>
        {isCross && <Cross setFilter={setFilter} />}
        <section className={classes.top_wrapper}>
          <div
            className={`${classes.filter} ${classes.website} ${cardFilter === 'website' ? classes.clicked : ''}`}
            onClick={() => {
              handleClick('website');
            }}
          >
            WEBSITE
          </div>
          <div
            className={`${classes.filter} ${classes.video} ${cardFilter === 'motion' ? classes.clicked : ''}`}
            onClick={() => {
              handleClick('motion');
            }}
          >
            MOTION
          </div>
          <div
            className={`${classes.filter} ${classes.graphic} ${cardFilter === 'graphic' ? classes.clicked : ''}`}
            onClick={() => {
              handleClick('graphic');
            }}
          >
            GRAPHIC
          </div>
        </section>
        <section className={classes.bottom_wrapper}>
          {cardFilter === 'website' && <Website websiteData={websiteData} />}
          {cardFilter === 'motion' && <Motion motionData={motionData} />}
          {cardFilter === 'graphic' && <Graphic graphicData={graphicData} />}
        </section>
      </div>
    </>
  );
}
