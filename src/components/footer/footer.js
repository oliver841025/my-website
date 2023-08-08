import classes from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={classes.whole_wrapper}>
        <button className={classes.copy_email_btn}>COPY EMAIL</button>
      </div>
    </>
  );
}
