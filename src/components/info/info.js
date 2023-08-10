import classes from './info.module.scss';
import Image from 'next/image';

export default function Info() {
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.author}>OLIVER HUANG</h2>
        <section>
          <p className={classes.about}>
            something about me something about me something about me something about me something
            about me something about me something about me something about me something about me
            something about me something about me something about me something about me something
            about me something about me something about me something about me something about me
            something about me something about me something about me something about me something
            about me something about me something about me something about me something about me
            something about me something about me something about me
          </p>
          <div className={classes.image_wrapper}>
            <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
          </div>
        </section>
        <section>
          <h3 className={classes.experience_title}>EXPERIENCE</h3>
          <div className={classes.experience_content}>
            <div>2023 / 05 - now</div>
            <div>KICKSCREW Front-end Engineer</div>
          </div>
          <div className={classes.experience_content}>
            <div>2023 / 05 - now</div>
            <div>KICKSCREW Front-end Engineer</div>
          </div>
        </section>
      </div>
    </>
  );
}
