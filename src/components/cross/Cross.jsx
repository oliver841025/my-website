import Image from 'next/image';
import crossImg from '../../../public/cross.svg';

export default function Cross(props) {
  const { filter, setFilter } = props;

  const handleCrossClick = () => {
    setFilter(null);
  };

  return <Image src={crossImg} width={30} height={30} alt="cross-btn" onClick={handleCrossClick} />;
}
