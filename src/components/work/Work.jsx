'use client';
import classes from './work.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Website from '../website/Website';
import Motion from '../motion/Motion';
import Graphic from '../graphic/Graphic';

export default function Info(props) {
  const { websiteData } = props;
  const [cardFilter, setCardFilter] = useState('website');

  const handleClick = (param) => {
    setCardFilter(param);
  };

  return (
    <>
      <div className={classes.wrapper}>
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
          {cardFilter === 'motion' && <Motion />}
          {cardFilter === 'graphic' && <Graphic />}
        </section>
      </div>
    </>
  );
}
