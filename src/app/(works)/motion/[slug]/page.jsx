import Image from 'next/image';
import classes from './page.module.scss';
import { client } from '../../../../utils/configSanity';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "motion"]{
      name,
      description,
      link,
      whatIHaveDone,
      'imgUrl': array_of_posters[0].asset->url,
    }`,
    {
      next: { revalidate: 10 },
    },
  );

  return posts.map((post) => ({
    slug: post.name,
  }));
}

async function getMotionData(slug) {
  const response = await client.fetch(
    `*[_type == "motion" && name == "${slug}"]{
    name,
    description,
    link,
    whatIHaveDone,
    'imgUrl': array_of_posters[0].asset->url,
  }`,
    {
      next: { revalidate: 10 },
    },
  );
  return response;
}

export default async function MotionDetail({ params }) {
  const { slug } = params;
  const motionData = await getMotionData(slug);

  return (
    <>
      {motionData.map((item) => (
        <>
          <div key={item._id}>
            <Link href={item.link ? item.link : '#'} className={classes.a}>
              <h1 className={classes.title}>{item.name}</h1>
            </Link>
            <h3 className={classes.desc}>{item.description}</h3>
            <div className={classes.img_block}>
              <Link href={item.link ? item.link : '#'}>
                <Image
                  src={item.imgUrl}
                  width={400}
                  height={230}
                  alt={item.name}
                  layout="responsive"
                  className={classes.image}
                />
              </Link>
            </div>
            <h3 className={classes.what_i_have_done_title}>What have I accomplished at work</h3>
            <ul className={classes.what_i_have_done_list}>
              {item.whatIHaveDone.map((each) => (
                <li className={classes.task} key={each._key}>
                  <h4 className={classes.task_title}>{each.task_title}</h4>
                  <p className={classes.task_desc}>{each.task_description}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </>
  );
}
