import classes from './info.module.scss';
import Image from 'next/image';
import { createClient } from 'next-sanity';

export default function Info({ names }) {
  console.log('names', names);
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.author}>{names?.name}</h2>
        <section>
          <p className={classes.about}>
            currently a frontend engineer who enjoys exploring technology. I appreciate maintaining flexibility in life
            and gravitate towards possibilities-rich endeavors. I also have a fondness for indulging in a delicious
            matcha latte.
          </p>
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

const client = createClient({
  projectId: 'hj4awfcj',
  dataset: 'production',
  apiVersion: '2023-08-27',
  useCdn: false,
});

export async function getStaticProps() {
  const names = await client.fetch(`*[_type == "info"]`);
  console.log('names', names);

  return {
    props: {
      names,
    },
  };
}
