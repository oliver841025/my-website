'use client';
import {  useState } from 'react';
import classes from './header.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import useStore from '../../app/hooks/useStore';

export default function Header() {
  const {filter, setFilter, work, setWork, info, setInfo} = useStore();
  const router = useRouter();

  const handleClick = (newFilter) => {
    setFilter(newFilter);
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
      </div>
    </>
  );
}
