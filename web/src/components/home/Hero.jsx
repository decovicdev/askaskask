import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <div className='pt-24 text-center max-w-5xl mx-auto mb-8'>
        <h1
          className='text-6xl  font-bold text-center text-black
             bg-brand-gradient text-transparent bg-clip-text'
        >
          Data simplified with Singapore Duck
          <span className='font-extralight'>AGI</span>
        </h1>
        <p className='text-2xl mt-5'>
          Transform complex data into actionable insights with the seamless and
          intelligent solutions of Singapore DuckAG
        </p>

        <div className='flex gap-6 justify-center mt-20'>
          <Link
            href='/register'
            className='bg-brand-gradient px-10 py-3 rounded-2xl text-lg font-bold text-white '
          >
            Create an Account
          </Link>

          <Link
            href='/register'
            className='border-2 border-black  px-10 py-3 rounded-2xl text-lg font-semibold text-black '
          >
            See Pricing
          </Link>
        </div>
      </div>
      <img
        src='/dashboard.png'
        className='max-w-7xl w-full object-cover mx-auto block -mb-12 -z-10 relative'
      />
    </>
  );
}
