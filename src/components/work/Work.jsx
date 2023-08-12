import classes from './work.module.scss';
import Image from 'next/image';

export default function Info() {
  return (
    <>
      <div className={classes.wrapper}>
        <section className={classes.top_wrapper}>
          <div className={`${classes.filter} ${classes.website}`}>WEBSITE</div>
          <div className={`${classes.filter} ${classes.video}`}>VIDEO</div>
          <div className={`${classes.filter} ${classes.graphic}`}>GRAPHIC</div>
        </section>
        <section className={classes.bottom_wrapper}>
          <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
          <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
          <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
        </section>
      </div>
    </>
  );
}
