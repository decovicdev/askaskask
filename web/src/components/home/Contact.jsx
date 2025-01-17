import { cn } from '@/lib/utils';
import Input from '../common/Input';
import Textarea from '../common/Textarea';

export default function Contact({ className }) {
  const links = [
    'https://api.duckagi.com',
    'https://api.duckagi.com/V1',
    'https://api.duckagi.com/chat/completions',
  ];

  return (
    <div className={cn('bg-white pt-14 pb-24 ', className)}>
      <div className='max-w-6xl mx-auto flex justify-between bg-white p-10 rounded-2xl'>
        <div>
          <h1 className='font-semibold text-4xl'>Contact us</h1>
          <p className='max-w-lg mb-5 text-lg'>
            For support and enquiries reach out to our support team via
          </p>

          <div className='rounded-2xl bg-main-bg max-w-lg px-6 py-4 grid gap-2.5'>
            <p className='text-gray-500'>Main station interface address</p>
            <a href={links[0]} className='underline text-sm font-bold'>
              {links[0]}
            </a>
            <a href={links[0]} className='underline text-sm font-bold'>
              {links[0]}
            </a>
            <span className='text-gray-500 text-sm'>API</span>
            {links.map((link, index) => (
              <a href={link} key={link} className='underline text-sm font-bold'>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* form */}

        <form className='border border-black/20 p-10 grid gap-5 rounded-xl  max-w-md w-full'>
          <h2 className='font-semibold text-2xl'>Drop us a message</h2>

          <Input label='Your Email address' />
          <Input label='Your Full Name' />

          <Textarea rows={5} label='Your Message' />

          <button className='bg-yellow-200 place-self-center px-7 py-3 rounded-2xl text-lg font-semibold text-white '>
            Send us a message
          </button>
        </form>
      </div>
    </div>
  );
}
