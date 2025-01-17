export default function AccessTutorial() {
  const links = [
    'https://api.duckagi.com',
    'https://api.duckagi.com/V1',
    'https://api.duckagi.com/chat/completions',
  ];

  return (
    <div className='bg-access-bg-gradient'>
      <div className='px-14 py-14 bg-white max-w-6xl mx-auto rounded-3xl mt-12 flex gap-24 items-stretch'>
        <div className=''>
          <h1 className='font-semibold text-4xl'>AccessTutorial</h1>
          <p className='max-w-md mb-5 text-sm'>
            CC and DDOS protection are enabled by default. For high concurrent
            users (more than 1,000 times per second), please contact us in
            advance to add them to the whitelist, otherwise you may not be able
            to access or request
          </p>

          <div className='rounded-2xl bg-main-bg max-w-md px-6 py-4 grid gap-2.5'>
            <p className='text-gray-500'>Main station interface address</p>
            <a
              href={links[0]}
              className='underline text-primary text-sm font-bold'
            >
              {links[0]}
            </a>
            <span className='text-gray-500 text-sm'>
              Different clients need to fill in different BASE_URL, please try
              the following address
            </span>
            {links.map((link, index) => (
              <a
                href={link}
                key={link}
                className='underline text-primary text-sm font-bold'
              >
                {link}
              </a>
            ))}
          </div>
          <button className='border-2  text-center bg-white mt-14 inline-block border-black px-8 py-3 rounded-2xl text-lg font-semibold text-black '>
            Mid journey Access
          </button>
        </div>

        <div className='bg-access-gradient border text-white px-8 py-5 border-white  rounded-xl flex-1'>
          <p className='font-bold text-lg'>Python Call</p>
        </div>
      </div>
    </div>
  );
}
