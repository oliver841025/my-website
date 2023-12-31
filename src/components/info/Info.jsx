'use client';
import classes from './info.module.scss';
import Image from 'next/image';

export default function Info(props) {
  const { infoData } = props;


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
