import classes from './header.module.scss';

export default function Header() {
  return (
    <>
      <div className={classes.whole_wrapper}>
        <section className={classes.left_wrapper}>
          <div className={classes.work_btn}>WORK</div>
          <div className={classes.info_btn}>INFO</div>
        </section>
      </div>
    </>
  );
}
