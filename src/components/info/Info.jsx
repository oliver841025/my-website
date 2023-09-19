import classes from './info.module.scss';
import Image from 'next/image';
import { client } from '../../utils/configSanity';

async function getData() {
  const response = await client.fetch(
    `*[_type == "info"]{
    name,
    content,
    'imgUrl': avatar[0].avatar.asset->url,
    experience
  }`,
    { next: { revalidate: 60 } },
  );
  return response[0];
}

export default async function Info() {
  const data = await getData();
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.author}>{data.name}</h2>
        <section>
          <p className={classes.about}>{data.content}</p>
          <div className={classes.image_wrapper}>
            <Image src={data.imgUrl} width={300} height={140} alt="avatar" layout="responsive"/>
          </div>
        </section>
        <section>
          <h3 className={classes.experience_title}>EXPERIENCE</h3>
          {data.experience.map((item, index) => (
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
