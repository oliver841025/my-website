'use client';
import classes from './motion.module.scss';
import Image from 'next/image';

export default function Motion(props) {
  const { motionData } = props;
  return (
    <>
      {motionData.map((item) => (
        <div className={classes.motion} key={item.name}>
          <div className={classes.cover}>
            <h4 className={classes.title}>{item.name}</h4>
          </div>
          <Image src={item.imgUrl} width={400} height={230} alt={item.name} />
        </div>
      ))}
    </>
  );
}
