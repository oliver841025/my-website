'use client';
import { useState } from 'react';
import classes from './header.module.scss';

export default function Header(props) {
  const { filter, setFilter } = props;

  const [workClicked, setWorkClicked] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);

  const handleClick = (param) => {
    setFilter(param);

    if (param === 'work') {
      setWorkClicked(true);
      setInfoClicked(false);
    } else if (param === 'info') {
      setWorkClicked(false);
      setInfoClicked(true);
    }
  };

  return (
    <>
      <div className={classes.whole_wrapper}>
        <section className={classes.left_wrapper}>
          <div
            className={`${classes.work_btn} ${workClicked ? classes.clicked : ''}`}
            onClick={() => {
              handleClick('work');
            }}
          >
            WORK
          </div>
          <div
            className={`${classes.info_btn} ${infoClicked ? classes.clicked : ''}`}
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
