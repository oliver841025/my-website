'use client';
import Link from 'next/link';
import classes from './motion.module.scss';
import Image from 'next/image';

export default function Motion(props) {
  const { motionData } = props;
  return (
    <>
      {motionData.map((item, index) => (
        <Link href={`/motion/${item.name}`} key={index}>
          <div className={classes.motion}>
            <div className={classes.cover}>
              <h4 className={classes.title}>{item.name}</h4>
            </div>
            <Image src={item.imgUrl} width={400} height={230} alt={item.name} />
          </div>
        </Link>
      ))}
    </>
  );
}
