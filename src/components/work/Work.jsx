'use client';
import classes from './work.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function Info() {
  const [cardFilter, setCardFilter] = useState(null);

  const handleClick = (param) => {
    setCardFilter(param);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <section className={classes.top_wrapper}>
          <div className={`${classes.filter} ${classes.website}`} onClick={handleClick('website')}>
            WEBSITE
          </div>
          <div className={`${classes.filter} ${classes.video}`} onClick={handleClick('video')}>
            VIDEO
          </div>
          <div className={`${classes.filter} ${classes.graphic}`} onClick={handleClick('graphic')}>
            GRAPHIC
          </div>
        </section>
        <section className={classes.bottom_wrapper}>
          {cardFilter === 'website'}
          {cardFilter === 'video'}
          {cardFilter === 'graphic'}
          <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
          <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
          <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
        </section>
      </div>
    </>
  );
}
