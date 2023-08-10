'use client';
import { useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Info from '../components/info/info';
import Work from '../components/work/work';
import classes from './style.module.scss';
import Image from 'next/image';

export default function Home() {
  const [filter, setFilter] = useState(null);
  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      <section className={classes.history_wrapper}>
        <div className={classes.history_title_wrapper}>
          <div className={classes.history_title}>History</div>
          <div className={classes.clear_button}>Clear history</div>
        </div>
        <div className={classes.history_content_wrapper}>
          <div className={classes.history_content}>
            <p className={classes.time}>Fri Jul 28 17:39:47</p>
            <p>Logged in</p>
            <p>
              Click to explore {'>'}
              {'>'}
            </p>
          </div>
          <div className={classes.history_content}>
            <p className={classes.time}>Fri Jul 28 17:39:47</p>
            <p>Glasses</p>
            <p>Something about glasses</p>
          </div>
        </div>
      </section>

      <div className={classes.wrapper}>
        <Image src="/doggy.jpeg" width={350} height={350} alt="Picture of the author" />
        <div className={classes.author}>OLIVER HUANG</div>
      </div>
      <div className={classes.recommendation_wrapper}>
        <p id="recommendation-text" className={classes.recommendation}>
          Available 24 hours, contact me (☞ﾟヮﾟ)☞ Available 24 hours, contact me (☞ﾟヮﾟ)☞
        </p>
      </div>
      {filter === 'info' && <Info />}
      {filter === 'work' && <Work />}
      <Footer />
    </>
  );
}
