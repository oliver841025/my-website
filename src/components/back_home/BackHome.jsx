import Link from 'next/link';
import classes from './backHome.module.scss';

export default function BackHome() {
  return (
    <Link href="/">
      <div className={classes.wrapper}>Home</div>
    </Link>
  );
}
