'use client';
import WebsitePopup from '../website_popup/Website_popup';
import classes from './website.module.scss';
import Image from 'next/image';

export default function Website(props) {
  const { websiteData } = props;
  // console.log('data', websiteData);

  return (
    <>
      {websiteData.map((item) => (
        <>
          <div className={classes.website} key={item.name}>
            <div className={classes.cover}>
              <h4 className={classes.title}>{item.name}</h4>
            </div>
            <Image src={item.imgUrl} width={400} height={230} alt={item.name} layout="responsive" />
          </div>
        </>
      ))}
    </>
  );
}
