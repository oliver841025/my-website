'use client';
import Image from 'next/image';
import crossImg from '../../../public/cross.svg';
import classes from './cross.module.scss';
import { useRouter } from 'next/navigation';
import useStore from '../../app/hooks/useStore';

export default function Cross() {
  const { filter, setFilter, work, setWork, info, setInfo } = useStore();

  const handleCrossClick = () => {
    setFilter('default');
  };

  return (
    <Image
      className={classes.cross}
      src={crossImg}
      width={30}
      height={30}
      alt="cross-btn"
      onClick={handleCrossClick}
      layout="responsive"
    />
  );
}
