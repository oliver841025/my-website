import Image from 'next/image';
import { client } from '../../../../utils/configSanity';

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "website"]{
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

async function getWebsiteData(slug) {
  const response = await client.fetch(
    `*[_type == "website" && name == "${slug}"]{
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

export default async function WebsiteDetail({ params }) {
  const { slug } = params;
  const websiteData = await getWebsiteData(slug);

  console.log('websiteData', websiteData);

  return (
    <>
      {websiteData.map((item) => (
        <>
          <div key={item._id}>
            <h1>{item.name}</h1>
            <h3>{item.description}</h3>
            <Image src={item.imgUrl} width={400} height={230} alt={item.name} layout="responsive" />
            <h3>What I have done</h3>
            <ul>
              {item.whatIHaveDone.map((each) => (
                <li key={each._key}>
                  <h4>{each.task_title}</h4>
                  <p>{each.task_description}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </>
  );
}
