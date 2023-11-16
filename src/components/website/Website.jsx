'use client';
import Link from 'next/link';
import classes from './website.module.scss';
import Image from 'next/image';

export default function Website(props) {
  const { websiteData } = props;
  // console.log('data', websiteData);

  return (
    <>
      {websiteData.map((item, index) => (
        <>
          <Link href={`/website/${item.name}`} key={index}>
            <div className={classes.website} key={index}>
              <div className={classes.cover}>
                <h4 className={classes.title}>{item.name}</h4>
              </div>
              <Image src={item.imgUrl} width={400} height={230} alt={item.name} layout="responsive" />
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
