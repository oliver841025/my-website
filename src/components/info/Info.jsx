import classes from './info.module.scss';
import Image from 'next/image';
import { client } from '../../utils/configSanity';
import { getCurrentDate } from '../../utils/getDate';

async function getData() {
  const names = await client.fetch(`*[_type == "info"]`);
  return names;
}

export default async function Info() {
  const data = await getData();
  console.log('data', data.experience[0]);
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.author}>{data[0].name}</h2>
        <section>
          <p className={classes.about}>{data[0].content}</p>
          <div className={classes.image_wrapper}>
            <Image src="/doggy.jpeg" width={300} height={300} alt="Picture of the author" />
          </div>
        </section>
        <section>
          <h3 className={classes.experience_title}>EXPERIENCE</h3>
          <div className={classes.experience_content}>
            <div>2023 / 05 - now</div>
            <div>KICKSCREW Front-end Engineer</div>
          </div>
          <div className={classes.experience_content}>
            <div>2023 / 05 - now</div>
            <div>KICKSCREW Front-end Engineer</div>
          </div>
        </section>
      </div>
    </>
  );
}
