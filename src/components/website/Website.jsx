'use client';
import classes from './website.module.scss';
import Image from 'next/image';

export default function Website(props) {
  const { websiteData } = props;
  console.log('data', websiteData);
  return (
    <>
      <div className={classes.website}>
        <div className={classes.cover}>
          <h4 className={classes.title}>{websiteData[2].name}</h4>
        </div>
        <Image src={websiteData[2].imgUrl} width={400} height={230} alt="KICKSCREW" />
      </div>
    </>
  );
}
