'use client';
import { useState } from 'react';
import Cross from '../cross/Cross';
import classes from './header.module.scss';

export default function Header(props) {
  const { filter, setFilter } = props;

  const handleClick = (param) => {
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
        <section className={classes.right_wrapper}>
          {filter !== null && <Cross filter={filter} setFilter={setFilter} />}
        </section>
      </div>
    </>
  );
}
