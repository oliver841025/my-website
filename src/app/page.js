import classes from './style.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={classes.wrapper}>
        <Image src="/doggy.jpeg" width={350} height={350} alt="Picture of the author" />
        <div className={classes.author}>OLIVER HUANG</div>
      </div>
      <div className={classes.recommendation_wrapper}>
        <p id="recommendation-text" className={classes.recommendation}>
          Available 24 hours, contact me (☞ﾟヮﾟ)☞ Available 24 hours, contact me (☞ﾟヮﾟ)☞ 
        </p>
      </div>
    </>
  );
}
