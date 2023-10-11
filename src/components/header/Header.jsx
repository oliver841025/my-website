'use client';
import {  useState } from 'react';
import Cross from '../cross/Cross';
import classes from './header.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [filter, setFilter] = useState(null);

  const handleClick = (param) => {
    router.push(`/?filter=${param}`);
    setFilter(param);

    if (param === 'work') {
      setFilter('work');
    } else if (param === 'info') {
      setFilter('info');
    }
  };

  return (
    <>
      <div className={classes.whole_wrapper}>
        <section className={classes.left_wrapper}>
          <div
            className={`${classes.work_btn} ${filter === 'work' ? classes.clicked : ''}`}
            onClick={() => {
              handleClick('work');
            }}
          >
            WORK
          </div>
          <div
            className={`${classes.info_btn} ${filter === 'info' ? classes.clicked : ''}`}
            onClick={() => {
              handleClick('info');
            }}
          >
            INFO
          </div>
        </section>
        <section className={classes.right_wrapper}>{filter !== null && <Cross setFilter={setFilter} />}</section>
      </div>
    </>
  );
}
