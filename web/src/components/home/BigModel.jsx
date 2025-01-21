import { Link } from 'react-router-dom';

export default function BigModel() {
  return (
    <div className='bg-white'>
      <p className='bg-brand-gradient uppercase ml-32 text-transparent bg-clip-text text-[6.25rem] font-black mt-20'>
        Big
        <br />
        <span className='text-[15.625rem] '>Model</span>
      </p>

      <div className='flex gap-6'>
        <img src='/aggregation.png' className='object-cover' />

        <div className='max-w-lg'>
          <p className='text-4xl font-semibold mb-10'>API Aggregation Brand</p>

          <p className='font-light text-xl mb-14'>
            We are committed to the achievement of providing a highly stable
            enterprise-level 2000Mbps bandwidth service. It exclusively utilizes
            official high-speed enterprise channels, avoiding low-cost
            alternatives.
          </p>

          <div className='flex gap-6 mt-20 text-center'>
            <Link
              href='/register'
              className='bg-brand-gradient px-7 py-3 flex-[2] rounded-xl text-lg font-semibold text-white '
            >
              Create an Account
            </Link>
            <Link
              href='/register'
              className='border-2 border-black flex-1  px-7 py-3 rounded-xl text-lg font-semibold text-black '
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
