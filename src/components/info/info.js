import classes from './info.module.scss';

export default function Info() {
  return (
    <>
      <div className={classes.wrapper}>
        <h2>OLIVER HUANG</h2>
        <section>
          <p>
            something about me something about me something about me something about me something
            about me
          </p>
          {/* <Image src="/doggy.jpeg" width={350} height={350} alt="Picture of the author" /> */}
        </section>
        <section>
          <h3>EXPERIENCE</h3>
          <div>
            <div>2023 / 05 - now</div>
            <div>KICKSCREW Front-end Engineer</div>
          </div>
          <div>
            <div>2023 / 05 - now</div>
            <div>KICKSCREW Front-end Engineer</div>
          </div>
        </section>
      </div>
    </>
  );
}
