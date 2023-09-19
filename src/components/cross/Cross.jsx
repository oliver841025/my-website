'use client';
import Image from 'next/image';
import crossImg from '../../../public/cross.svg';
import { useRouter } from 'next/navigation';

export default function Cross(props) {
  const { setFilter } = props;
  const router = useRouter();

  const handleCrossClick = () => {
    router.push('/');
    setFilter(null);
  };

  return <Image src={crossImg} width={30} height={30} alt="cross-btn" onClick={handleCrossClick} layout="responsive" />;
}
