import styles from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={styles.whole_wrapper}>
        <button className={styles.copy_email_btn}>COPY EMAIL</button>
      </div>
    </>
  );
}
