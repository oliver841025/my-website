import Image from 'next/image';
import classes from './website_popup.module.scss';

export default function WebsitePopup(props) {
  const { websiteData } = props;

  return (
    <>
      <div className={classes.wrapper}>
        <a href={websiteData[2].link} target="_blank">
          <Image src={websiteData[2].imgUrl} width={600} height={320} alt="kickscrew" className={classes.popupImage} />
        </a>

        <h2 className={classes.title}>{websiteData[2].name}</h2>
        <p>{websiteData[2].description}</p>
        <hr className={classes.line} />
        <div>
          <h3 className={classes.subtitle}>What I have done</h3>
          <ul className={classes.whatIveDoneList}>
            {websiteData[2].whatIHaveDone.map((each) => (
              <li key={each._key}>
                <p className={classes.mission_title}>{each.task_title}</p>
                <p className={classes.mission_desc}>{each.task_description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
