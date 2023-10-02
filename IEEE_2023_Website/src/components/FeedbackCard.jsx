//This is the Official IEEE Website for the year 2023
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className='flex flex-col px-8 py-10 rounded-[20px]  max-w-[330px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    {/* <img
      src={quotes}
      alt='double_quotes'
      className='w-[42.6px] h-[27.6px] object-contain'
    /> */}

    <div className='flex flex-row'>
      {/* <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' /> */}
      <div className='w-2/5 '>
        <img src={img} alt={name} className=' w-auto h-auto' />
      </div>
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
          {title}
        </p>
      </div>
    </div>
    <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-10'>
      {content}
    </p>
  </div>
);

export default FeedbackCard;
