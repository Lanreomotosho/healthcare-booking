import { fags } from './../../assets/data/faqs';
import FagItem from './FagItem';

const FagList = () => {
  return (
    <ul className='mt-[38px]'>
        {fags.map((item, index) => (
            <FagItem item={item} key={index} />
        ))}FagList</ul>
  )
}

export default FagList