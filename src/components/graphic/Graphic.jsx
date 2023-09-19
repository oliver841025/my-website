import Image from 'next/image';
import classes from './graphic.module.scss';

export default function Graphic(props) {
  const { graphicData } = props;
  return (
    <>
      {graphicData.map((item) => (
        <div className={classes.graphic} key={item.name}>
          <div className={classes.cover}>
            <h4 className={classes.title}>{item.name}</h4>
          </div>
          <Image src={item.imgUrl} width={400} height={550} alt={item.name} layout="responsive" />
        </div>
      ))}
    </>
  );
}
