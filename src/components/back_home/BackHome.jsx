import Link from 'next/link';
import classes from './backHome.module.scss';

export default function BackHome(props) {
  const { filter } = props;
  return (
    <Link href={filter}>
      <div className={classes.wrapper}>Home</div>
    </Link>
  );
}
