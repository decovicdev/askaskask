import Marquee from '../ui/marquee';

export default function Announcement() {
  return (
    <div className='bg-[#E9E9E9] relative'>
      <Marquee pauseOnHover className='[--duration:20s] max-w-6xl mx-auto'>
        <p>
          <span className='mr-3'>📢</span>
          The latest OpenAI o1 model, [o1-all] (upgraded version) and
          [o1-pro-all] ($200 package), now supports image recognition as of
          12/07
        </p>
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}
