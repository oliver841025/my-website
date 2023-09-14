'use client';
import classes from './website.module.scss';
import Image from 'next/image';

export default function Website(props) {
  const { websiteData } = props;
  console.log('data', websiteData);
  return (
    <>
      <div className={classes.website}>
        <Image src={websiteData[2].imgUrl} width={400} height={230} alt="KICKSCREW" />
        <h4>{websiteData[2].name}</h4>
        <p>{websiteData[2].description}</p>
      </div>
    </>
  );
}
