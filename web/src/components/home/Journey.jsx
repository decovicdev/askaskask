export default function Journey() {
  return (
    <div className='relative bg-api-gradient'>
      <img
        src='/electric-cloud.png'
        className='object-cover absolute top-0 -translate-y-1/4 left-11'
      />

      <div className='pt-[303px]'>
        <p className='font-semibold text-5xl bg-brand-gradient text-transparent bg-clip-text text-center  mb-5'>
          Get API and start your journey
        </p>

        <p className='max-w-3xl  text-center mx-auto text-xl'>
          After logging in, visit and click Token - Add a new token. The token
          limit is set to $1 for every 500,000. After adding successfully, you
          can click Copy APIKEY
        </p>

        <div className='flex justify-center relative'>
          <img
            src='/wallet-screen.png'
            className='object-cover shadow-[0px_4px_80px_rgba(154, 154, 154, 0.25)'
          />
          <img
            src='/cloud-db.png'
            className='absolute left-2/3 bottom-[20%] shadow-[0px_60px_230px_rgba(77, 88, 147, 0.8)]'
          />
        </div>
      </div>
    </div>
  );
}
