import { gsap } from 'gsap';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Info from '../components/info/Info';
import Work from '../components/work/Work';
import { client } from '../utils/configSanity';
import classes from './style.module.scss';
import Image from 'next/image';

async function getHomepageData() {
  const response = await client.fetch(
    `*[_type == "homepage"]{
    name,
    'imgUrl': poster.asset->url,
  }`,
    {
      next: { revalidate: 60 },
    },
  );
  return response;
}

async function getGraphicData() {
  const response = await client.fetch(
    `*[_type == "graphic"]{
    name,
    description,
    'imgUrl': array_of_posters[0].poster.asset->url,
  }`,
    {
      next: { revalidate: 60 },
    },
  );
  return response;
}

async function getWebsiteData() {
  const response = await client.fetch(
    `*[_type == "website"]{
    name,
    description,
    'imgUrl': array_of_posters[0].asset->url,
  }`,
    {
      next: { revalidate: 60 },
    },
  );
  // console.log('response', response);
  return response;
}

async function getMotionData() {
  const response = await client.fetch(
    `*[_type == "motion"]{
    name,
    description,
    'imgUrl': array_of_posters[0].asset->url,
  }`,
    {
      next: { revalidate: 60 },
    },
  );
  // console.log('response', response);
  return response;
}

export default async function Home({ searchParams }) {
  const filter = searchParams.filter;
  const homepageData = await getHomepageData();
  const websiteData = await getWebsiteData();
  const motionData = await getMotionData();
  const graphicData = await getGraphicData();

  console.log('homepageData', homepageData);

  return (
    <>
      <Header />
      <section className={classes.history_wrapper}>
        <div className={classes.history_title_wrapper}>
          <div className={classes.history_title}>History</div>
          <div className={classes.clear_button}>Clear history</div>
        </div>
        <div className={classes.history_content_wrapper}>
          <div className={classes.history_content}>
            <p className={classes.time}>Fri Jul 28 17:39:47</p>
            <p>Logged in</p>
            <p>
              Click to explore {'>'}
              {'>'}
            </p>
          </div>
          <div className={classes.history_content}>
            <p className={classes.time}>Fri Jul 28 17:39:47</p>
            <p>Glasses</p>
            <p>Something about glasses</p>
          </div>
        </div>
      </section>

      <div className={classes.wrapper}>
        <Image src={homepageData[0].imgUrl} width={600} height={350} layout="responsive" alt="Picture of the author" />
        <div className={classes.author}>OLIVER HUANG</div>
      </div>
      {filter === 'info' && <Info />}
      {filter === 'work' && <Work websiteData={websiteData} motionData={motionData} graphicData={graphicData} />}
    </>
  );
}
