'use client';
import { useEffect, useState } from 'react';
import classes from './info.module.scss';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Info(props) {
  const { infoData } = props;
  const [filter, setFilter] = useState(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isCross, setIsCross] = useState(false);

  useEffect(() => {
    const targetSearchParams = searchParams.toString();
    if (targetSearchParams === 'filter=info') {
      setIsCross(true);
    } else {
      setIsCross(false);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.author}>{infoData.name}</h2>
        <section>
          <p className={classes.about}>{infoData.content}</p>
          <div className={classes.image_wrapper}>
            <Image src={infoData.imgUrl} width={300} height={140} alt="avatar" />
          </div>
        </section>
        <section>
          <h3 className={classes.experience_title}>EXPERIENCE</h3>
          {infoData.experience.map((item, index) => (
            <div className={classes.experience_content} key={index}>
              <div>{item.duration}</div>
              <div>
                {item.company} / {item.position}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
